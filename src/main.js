import { $ } from './utils/dom.js';
import { Component } from './lib/Component.js';
import { fetchLabels } from './api/fetcher.js';
import { getLabelTpl } from './tpl.js';

import { LabelList, LabelForm } from './components';

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
    labelsLength: this.state.labels.length,
  });
};

App.prototype.setEvent = function () {
  $('.new-label-button').addEventListener('click', () => {
    this.state.isFormEnabled = true;
  });
};

App.prototype.initState = async function () {
  return {
    isFormEnabled: true,
    labels: await fetchLabels(),
  };
};

App.prototype.handleCreateLabel = function ({ name, description, color }) {
  this.state.labels = [...this.state.labels, { name, description, color }];
};

App.prototype.mounted = async function () {
  const { isFormEnabled, labels } = this.state;

  if (isFormEnabled) {
    new LabelForm($('#form-wrapper'), {
      onCreateLabel: this.handleCreateLabel.bind(this),
    });
  }

  new LabelList($('.label-list'), {
    labels,
  });
};

new App($('#app'));
