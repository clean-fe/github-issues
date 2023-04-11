import { Component } from './lib/Component.js';
import { getLabelTpl } from './tpl.js';
import { $ } from './utils/dom.js';

class App extends Component {
  template() {
    return getLabelTpl();
  }

  setEvent() {
    $('.new-label-button').addEventListener('click', () => {
      $('#new-label-form').classList.toggle('hidden');
    });
  }
}

new App(document.querySelector('#app'), {
  state: {
    newLabelEnabled: false,
  },
});
