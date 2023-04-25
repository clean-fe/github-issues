import { $ } from './utils/dom.js';
import { Component } from './lib/Component.js';
import { fetchLabels } from './api/services/labels.js';
import { getLabelTpl } from './tpl.js';

import { LabelList, UpdateLabelsButton } from './components/index.js';

//msw worker
import { worker } from './mocks/browser.js';
worker.start();

function App($target) {
  // 클래스 프로토타입으로부터 상속 받기 위해 해야하는 일 1...
  const instance = Reflect.construct(Component, [$target], App);
  Object.setPrototypeOf(this, instance);
}

// 상속 받기 위해 해야하는 일 2...
App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;

App.prototype.template = function () {
  return getLabelTpl({
    labelsLength: this.state.labels?.length || 0,
  });
};

App.prototype.setEvent = function () {
  $('.new-label-button').addEventListener('click', () => {
    if (this.state.isFormEnabled) return;
    this.state.isFormEnabled = true;
  });
};

App.prototype.initState = async function () {
  return {
    isFormEnabled: false,
    labels: await fetchLabels(),
  };
};

App.prototype.handleCreateLabel = function (labels) {
  this.state.labels = labels;
};

App.prototype.handleCancelCreateLabel = function () {
  this.state.isFormEnabled = false;
};

App.prototype.handleUpdateLabels = async function (labels) {
  this.state.labels = labels;
};

App.prototype.mounted = async function () {
  const { isFormEnabled, labels } = this.state;
  new LabelList($('.label-list'), {
    labels,
  });

  new UpdateLabelsButton(null, {
    onUpdateLabels: this.handleUpdateLabels.bind(this),
  });

  if (!isFormEnabled) return;
  import('./components/LabelForm/LabelForm.js').then(({ default: LabelForm }) => {
    new LabelForm($('#form-wrapper'), {
      onCreateLabel: this.handleCreateLabel.bind(this),
      onCancelCreateLabel: this.handleCancelCreateLabel.bind(this),
    });
  });
};

new App($('#app'));
