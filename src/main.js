import { $ } from './utils/dom.js';
import { Component } from './lib/Component.js';
import { fetchLabels } from './api/fetcher.js';
import { getLabelTpl } from './tpl.js';

import LabelList from './components/LabelList.js';

function App($target) {
  // 클래스 프로토타입으로부터 상속 받기 위해 해야하는 일 1...
  const instance = Reflect.construct(Component, [$target], App);
  Object.setPrototypeOf(this, instance);
}

// 상속 받기 위해 해야하는 일 2...
App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;

App.prototype.template = function () {
  return getLabelTpl();
};

App.prototype.setEvent = function () {
  $('.new-label-button').addEventListener('click', () => {
    $('#new-label-form').classList.toggle('hidden');
  });
};

App.prototype.initState = async function () {
  return {
    labels: await fetchLabels(),
  };
};

App.prototype.mounted = async function () {
  new LabelList($('.label-list'), {
    labels: this.state.labels,
  });
};

new App($('#app'));
