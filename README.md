# clean-fe-template

## 구조

- entry 파일은 main.js

  - issue, label에서 내보내는 함수만 호출한다.
  - 초기 렌더링 (issue)
  - 사용자 이벤트에 종속 (issue, label)

- issue와 label은 분리

- utils.js를 만든다.

  - pipe 등

- data를 fetch하는 함수를 만든다.
- 화면에 보이는 데이터만 필터링하는 함수를 만든다.

  - 불필요한 정보에 접근하지 않을 수 있다.

- status(opens, closed)를 판별하는 함수
