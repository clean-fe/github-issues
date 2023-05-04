class LabelRequestDTO {

  #color

  constructor(name, description, color) {
    this.name = name
    this.description = description
    this.#color = this.removeHashTag(color)
  }

  get color() {
    return this.#color
  }

  set color(color) {
    this.#color = this.removeHashTag(color)
  }

  removeHashTag(stringValue) {
    return stringValue.replace('#', '')
  }

  // COMMENT: `toJSON()` 이라는 특수한 메서드가 `JSON.stringify()` 메서드가 호출될 때 자동으로 사용된다.
  //          이 `toJSON()` 메서드를 정의하지 않으면 private properties 를 가져오지 않는다.
  //          `toJson()`으로 적지 않도록 철자에 유의할 것‼️
  toJSON() {
    return {
      name: this.name,
      description: this.description,
      color: this.#color
    }
  }
}

export {
  LabelRequestDTO
}
