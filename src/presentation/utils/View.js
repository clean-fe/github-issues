export default class View {
  constructor(component) {
    this.initializer(component)
  }

  initializer(component) {
    console.info(`initializer is called! ${component}`)
  }

  refresh(actions = []) {
    console.info(`refresh is called! ${actions}`)
    actions?.forEach(action => action())
  }

}
