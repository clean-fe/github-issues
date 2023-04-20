export function ViewModel({ element, model, view, mounted = function () {}, events = [], isRoot = false }) {
  this.element = element;
  this.view = view;
  this.model = model;
  this.events = events;
  this.mounted = mounted;
  this.isRoot = isRoot;

  this.bindData();
  this.render();
  this.mounted();
  this.bindEvent();
}

ViewModel.prototype.render = function () {
  document.querySelector(this.element).innerHTML = this.view(this.model.data);
};

ViewModel.prototype.bindData = function () {
  if (!this.isRoot) return;

  let viewModelInstance = this;
  Object.keys(this.model.data).forEach((key) => {
    let iValue = this.model.data[key];
    Object.defineProperty(this.model.data, key, {
      get() {
        return iValue;
      },
      set(newValue) {
        iValue = newValue;
        viewModelInstance.render();
        viewModelInstance.bindEvent();
      },
    });
  });
};

ViewModel.prototype.bindEvent = function () {
  this.events.forEach(({ target, eventName, handler }) => {
    document.querySelector(target).addEventListener(eventName, handler.bind(this));
  });
};
