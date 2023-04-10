// function App() {

// }

class Publisher {
  state;
  observers = new Set(); // 구독 하고있는 대상들을 모아놓는 집합

  constructor(state) {
    this.state = state;

    // 방법1 : Object define Property로 getter, setter 정의하기
    // Object.keys(state).forEach((key) => {
    //   Object.defineProperty(this, key, {
    //     get: () => this.#state[key],
    //   });
    // });

    // 방법2 : Proxy API를 이용해서
    return new Proxy(this, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, value) => {
        this.notify();
        target[prop] = value;
        return true;
      },
    });
  }

  // 구독자 등록
  addObserver(observer) {
    this.observers.add(observer);
  }

  deleteObserver(observer) {
    this.observers.delete(observer);
  }

  // 각 구독자에게 있는 액션을 실행
  notify() {
    this.observers.forEach((fn) => fn());
  }

  // state 변경 함수
  setState(newState) {
    this.state = { ...this.state, newState };
    // this.notify(); // 구독자에게 state가 변화했음을 알림
  }
}

class Subscriber {
  #fn; // 구독 대상이 변하면 실행할 일을 정의

  constructor(fn) {
    this.#fn = fn;
  }

  // publisher를 구독함을 정의하는 함수
  subscribe(publisher) {
    publisher.addObserver(this.#fn);
  }
}

const store = new Publisher({ a: 2, b: 5 });
const subscriber1 = new Subscriber(() => console.log('update!'));
subscriber1.subscribe(store); // subscriber1이 store를 구독한다(store의 변화를 지켜본다)
store.setState({ a: 3 });
