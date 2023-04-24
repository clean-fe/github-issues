export default class Label {
  constructor(name, description, color) {
    this.name = name;
    this.description = description;
    this.color = color;
  }

  static getRandomLabelColor() {
    return colors.Label.pick()
  }

}

Object.defineProperty(Label.prototype, 'validate', {
  value: function () {
    switch (true) {
      case this.name?.trim().length < 5:
        return false
      case this.description?.trim().length < 10:
        return false
      case !colors.Label.includes(this.color?.trim()):
        return false
      default:
        return true
    }
  }
})

const colors = Object.freeze({
  Label: [
    '#0075CA',
    '#A2EEEF',
    '#BFDADC',
    '#D876E3',
    '#E4E669',
    '#B8BBBE',
  ]
})
