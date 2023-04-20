class MemoryStorage {
  #storage = new Map();

  getItem(key) {
    return this.#storage.get(key) || null;
  }

  setItem(key, value) {
    this.#storage.set(key, String(value));
  }

  removeItem(key) {
    this.#storage.delete(key);
  }
}

function isLocalStorageAble() {
  try {
    window.localStorage.setItem("TEST", "TEST");
    window.localStorage.removeItem("TEST");
    return true;
  } catch (e) {
    return false;
  }
}

export const safeLocalStorage = isLocalStorageAble() ? window.localStorage : new MemoryStorage();
