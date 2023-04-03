# clean-fe-template

## 설치순서

```shell
git clone https://github.com/clean-fe/github-issues.git

cd github-issues

npm install

npm run dev
```

# 1주차 : 함수를 활용한 애플리케이션

## 목표

### 1. 기능 요구사항 충족

- [ ] 초기 로딩시에 위 화면과 같은 화면을 보여준다.

  - [ ] 헤더영역에 opens, closed 갯수를 올바르게 표시
  - [ ] 본문영역에 issue 리스트를 표시

- [ ] opens , closed 버튼을 선택하면 각각 해당하는 내용을 노출.

### 2. 구현 요구사항 충족

2.1. 데이터 요청
초기 데이터는 fetch 요청을 통해서 가져온다.
URL : /data-sources/issues.json, labels.json

2.2. 함수 사용

- [ ] 배열의 고차함수 적극 사용.
- [ ] 여러개의 작은 함수를 만들어야 함.
  - [ ] 짧은 함수를 화살표 함수로 표현(람다표기법)
- [ ] 중복 코드 최대한 없게.
- [ ] 콜백함수도 가급적 분리
- [ ] 함수 합성 시도하기.
  - [ ] pipeline 방식.
  - [ ] 필요하면 currying 기법으로 합성가능하도록 바인딩처리.

### 3. ES Modules 활용

- [ ] ES Modules을 사용
- [ ] main.js 가 entry point 역할임. 그외 필요한 js 모듈(파일)을 생성해서 구현할 수 있음.

### 4. 추가 목표

- [ ] 함수형 프로그래밍의 개념과 적용을 이해한 문서
- [ ] pipe, currying을 이해하고 사용
- [ ] 페어 프로그래밍 경험

## 설계

---

## 1차 회고

```js
const fetchItems = async (fetchCallback) => {
  return await fetchCallback()
}

const templateRender = (items, getTempl) => {
  return items.map(getTempl)
}

const createDOMwithItems = (items, className) => [document.querySelector(className), items],

const executeRender = ([dom, cItems]) => render(dom, cItems);

const renderComponent = async (fetchCallback, getTempl, className) => {
  const processPipe = pipe(
    () => fetchItems(fetchCallback),
    (items) => templateRender(items, getTempl),
    (items) => createDOMwithItems(items, className),
    executeRender,
  )()
}
```

- 생각했던 함수가 아닌 것 같다.
  - items만 넘기는 것을 구현한 것이 아닌지...
  - 인자의 인터페이스가 통일되지 않는 것이 이상함.
  - pipe 내부에 인자로 넘기는 함수를 좀 더 깔끔하게 할 수 있지 않을까 고민중...

---

## 2차 회고

```js
const fetchItems = (fetchCallback) => async () => {
  return await fetchCallback()
}
const templateRender = (getTempl) => (items) => {
  return items.map(getTempl)
}

const createDOMwithItems = (className) => (items) =>
  render(document.querySelector(className), items)

const renderComponent = async ({ fetchCallback, getTempl, className }) => {
  pipe(
    fetchItems(fetchCallback),
    templateRender(getTempl),
    createDOMwithItems(className),
  )()
}
```

### 희열

- 처음하는 페어프로그래밍이라 당황스러웠는데, 빰빰님이 리딩을 잘 해줘서 잘 한 것 같습니다.
- pipe를 실제로 구현하는 상황에서 복잡한 로직을 보느라
  - 잘게 쪼개고,
  - 고차함수를 사용하는 것을 연습하고자 합니다.

### 빰빰

- 균형된 지식 수준이 페어 작업을 가능하게 한 것 같습니다.
- pipe가 완성되었다고 생각했는데, 계속 디벨롭해야하는 상황입니다.

## 3차 pipe 예상

```js
const renderComponent = async (props) => {
  const props = { fetchCallback, getTempl, className }

  pipe(fetchItems, templateRender, createDOMwithItems)(props)
}
```

---

- compose vs. pipe
- 함수형프로그래밍의 철학 (모나드 개념, 커링 개념)
