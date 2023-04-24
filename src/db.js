const dbName = 'myDatabase';
let db;

const request = indexedDB.open(dbName);

request.onsuccess = (event) => {
  db = event.target.result;
  console.log('DB 열기 성공:', db);
};

request.onerror = (event) => {
  console.error('DB 열기 실패:', event.target.errorCode);
};

request.onupgradeneeded = (event) => {
  db = event.target.result;
  const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });

  objectStore.createIndex('name', 'name', { unique: true });
  objectStore.createIndex('description', 'description', { unique: false });
  objectStore.createIndex('color', 'color', { unique: false });
};

export const addData = (data) => {
  const transaction = db.transaction('myObjectStore', 'readwrite');
  const objectStore = transaction.objectStore('myObjectStore');
  const request = objectStore.add(data);

  request.onsuccess = (event) => {
    console.log('데이터 추가 성공:', event.target.result);
  };

  request.onerror = (event) => {
    console.error('데이터 추가 실패:', event.target.errorCode);
  };
};

export const getData = (key) => {
  const transaction = db.transaction('myObjectStore', 'readonly');
  const objectStore = transaction.objectStore('myObjectStore');
  const request = objectStore.get(key);

  request.onsuccess = (event) => {
    console.log('데이터 검색 성공:', event.target.result);
  };

  request.onerror = (event) => {
    console.error('데이터 검색 실패:', event.target.errorCode);
  };
};

// TODO: IndexedDB 사용법 익힌 후 수정할 것
export const saveLocalStorage = (data) => {
  localStorage.setItem('labels', JSON.stringify(data));
};
