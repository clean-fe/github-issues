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

## 기능 요구 사항

기능 요구 사항

- [ ] 헤더영역에 opens, closed 갯수를 올바르게 표시
- [x] 본문영역에 issue 리스트를 표시
- [ ] opens , closed 버튼을 선택하면 각각 해당하는 내용을 노출.
- [ ] 그외 기능(issue 생성, 검색등)은 구현하지 않으며, 본인이 하고 싶으면 할 수 있다.
