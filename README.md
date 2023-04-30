# clean-fe-template

### 설치순서
```shell
git clone https://github.com/clean-fe/github-issues.git 

cd github-issues

npm install

npm run dev
```

---

# 1단계
- [X] MSW 설치
- [X] Label 을 MSW 를 이용해 기능 구현
- [X] 동일하게 Issue 화면 및 MSW 연동 기능 구현

```shell
# msw 설치 후 Browser Integration
npx msw init public/ -S
```

### Issues

- vite.config.js 파일에 publicDir 설정 해도 public 인식이 안 되서 제거함.
- vite.config.js 제거하니 src 내 index.html 이 entry point 인식이 안 됨;;
  node 서버는 express 를 이용해 app.js 를 강제로 entry point 로 잡아주었으나
  프론트는 기본적으로 설정을 변경하지 않으면 root directory 에 존재하는 index.html 이
  entry point 로 잡히는구나...

# 2단계
- [X] 에러 처리 1 - Labels POST 간헐적 500 응답이 온다. console.error 및 사용자에게 적절히 알리기.
- [X] 에러 처리 2 - 에러 타입을 사전에 정의한 Enum~Case 와 같은 것을 가정해 구현 처리.
- [X] 에러 처리 3 - 비동기에 대한 에러 처리
    - escaping closure 개념으로 접근이 가능할까?
    - 자바스크립트 함수가 throw 를 명시하고 주변 코드 또는 호출한 코드로 에러를 전파해 처리가 가능할까?
    - 에러를 주변부로, 상위로 전파가 가능하다면 상위에 Wrapper 를 감싸거나 Interceptor 와 같은 것들을 사용해
      에러 처리가 가능할까?
    - async, await 을 사용하면 다 해결이 될까?
- [ ] 새고로침 페이지 유지(아마도 Global Store 구현을 통해?)
- [ ] Issue & Label 필터 기능 구현
- [ ] 검색 기능에 디바운싱 적용
- [ ] 검색 기능에 캐싱 적용(동일 데이터일 경우 렌더링 하지 않도록)
- [ ] App Lifecycle: LocalStorage 를 활용해 Label 입력 상태에서 탭 또는 브라우저 종료 후 데이터 보존.

# 3단계
- [ ] Abort Controller 를 활용한 중복 요청 취소.
- [ ] 현재 적용된 Dynamic Import 를 prefetch/preload 를 적용해보도록.

# 4단계
- [ ] 기존 코드 리팩터링 및 테스트 코드 작성.
- [ ] 변경 사항 또는 무언가 무언가... TDD 방식으로 개발하기.

# 5단계
- [ ] TypeScript 전환
- [ ] Decorators 적용
- [ ] 최적화
  - Label 생성 시 display none 대신 visibility hidden 에 height 조절하는 게 비용이 더 적을까?
  - 3D Transform / Opacity / Will-change?, video/canvas el 을 사용한 GPU 가속 처리 고민해보기.
  - Service Worker, Cache Header 와 같은 것들로 네트워크 요청 캐시 전략.
- [ ] deinit, defer 알아보기.
  - 자바스크립트에서 인스턴스의 deinit, 함수의 defer 가능한가?
  - 가능하지 않다면 반드시 필요한가? 혹은 구현이 가능한가?
- 자바스크립트에 생긴 WeakRef, WeakMap 등 알아보기. WeakRef 를 이용해 
  Strong Reference Cycle 해결 처리가 가능할까?
- [ ] await all 되나...?
    - let photos = await [firstPhoto, secondPhoto, thirdPhoto] 이런 느낌으로
    - const [result1, result2] = await Promise.all([func1(), func2()]) 이게 되나?
- [ ] Actor 와 같은 동시성 코드에서 isolation 시키고 순차 접근을 할 수 있게 전역 Store 구현이 가능할까? 
      Actor 와 같은 isolation 이 불가능 하면 많은 메모리 접근 충돌이 생길텐데??
