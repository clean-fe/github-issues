import Observable from "./Observable";

export default class Store extends Observable {

  appName = 'GITHUB_ISSUE'

  constructor() {
    super();
    if (!Store.instance) {
      Store.instance = this
    }
    return Store.instance
  }

  // TODO: Observable 을 사용해 자동화 시킬 수 없을까?
  // COMMENT: 수동으로 또는 'beforeunload' 를 이용해 트리거 시킨다.
  saveToPersistenceStorage(key, data, storage = Storages.localStorage) {
    const saveToLocalStorage = (key, data) => {
      let db = JSON.parse(localStorage.getItem(this.appName))
      if (!db) {
        db = {}
      }
      db[key] = data
      localStorage.setItem(this.appName, JSON.stringify(db))
    }

    const saveToIndexedDB = (key, data) => {
      // Something...
    }
    switch (storage) {
      case Storages.localStorage:
        saveToLocalStorage(key, data)
        break
      case Storages.indexedDB:
        saveToIndexedDB(key, data)
        break
      default:
        throw new Error('유효한 데이터베이스가 없습니다.')
    }
  }

  // COMMENT: 수동으로 또는 'DOMContentLoaded' 를 이용해 트리거 시킨다.
  loadFromPersistenceStorage(key, storage = Storages.localStorage) {
    const loadFromLocalStorage = key => {
      const db = JSON.parse(localStorage.getItem(this.appName))
      return db[key]
    }

    const loadFromIndexedDB = key => {
      // Something...
    }

    switch (storage) {
      case Storages.localStorage:
        return loadFromLocalStorage(key)
      case Storages.indexedDB:
        return loadFromIndexedDB(key)
      default:
        throw new Error('유욯한 데이터베이스가 없습니다.')
    }
  }

  // COMMENT: 수동으로 트리거 시킨다.
  removeAtPersistenceStorage(key, storage = Storages.localStorage) {
    const removeAtLocalStorage = key => {
      const db = JSON.parse(localStorage.getItem(this.appName))
      delete db[key]
      localStorage.setItem(this.appName, JSON.stringify(db))
    }

    const removeAtIndexedDB = key => {
      // Something...
    }

    switch (storage) {
      case Storages.localStorage:
        return removeAtLocalStorage(key)
      case Storages.indexedDB:
        return removeAtIndexedDB(key)
      default:
        throw new Error('유욯한 데이터베이스가 없습니다.')
    }
  }

  clear(storage) {
    const decision = confirm('정말로 삭제하시겠습니까?')
    if (!decision) return
    const clearLocalStorage = () => {
      delete localStorage[this.appName]
    }

    const clearIndexedDB = () => {
      // Something...
    }

    switch (storage) {
      case Storages.localStorage:
        return clearLocalStorage()
      case Storages.indexedDB:
        return clearIndexedDB()
      default:
        throw new Error('유욯한 데이터베이스가 없습니다.')
    }
  }

}

const Storages = Object.freeze({
  localStorage: 'localStorage',
  indexedDB: 'indexedDB'
})
