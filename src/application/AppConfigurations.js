import Toast from "./Toast"

class $AppConfigurations {
  constructor() {
    this.apiBaseURL = ''

    // MARK: Auto Extend Globally
    extendArray()

    this.Toast = Toast
  }
}

const extendArray = () => {
  Array.prototype.pick = function () {
    return this[Math.floor(Math.random() * this.length)];
  }
}

const $App = new $AppConfigurations()
export default $App
