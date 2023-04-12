let currentObserver = null;

// observable 한 객체 생성
const observable = (state) => {
  const observerSet = new Set();

  return new Proxy(state, {
    get: (target, prop) => {
      if (currentObserver) observerSet.add(currentObserver); // getter가 호출되면서 옵저버를 등록
      return target[prop];
    },
    set: (target, prop, value) => {
      target[prop] = value;
      observerSet.forEach((observer) => observer()); // set 할때마다 해야할 일 -> 등록된 옵저버들 실행
      return true;
    },
  });
};

// 관찰대상에 대한 액션을 지정하는 함수
const observe = (fn) => {
  currentObserver = fn;
  fn(); // fn이 state의 속성을 포함하는 함수라면(ex - console.log(state.a)) 무조건 getter가 호출 -> 이로 인해 현재의 observer가 등록된다.
  currentObserver = null;
};

export { observable, observe };
