export default class Navigator {
  navigate(url) {
    history.pushState({}, '', url)
  }
}
