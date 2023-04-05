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

- [x] 헤더영역에 opens, closed 갯수를 올바르게 표시
- [x] 본문영역에 issue 리스트를 표시
- [x] opens , closed 버튼을 선택하면 각각 해당하는 내용을 노출.

## 0405 목표

- [x] TODO 처리
- [x] sequence의 존재 이유 체크해보고 없애거나 수정
- [x] 모듈 분리
- [x] 값에 의미에 적합하도록 이름 수정
- [x] issue 데이터에서 컴포넌트에 필요한 값만 골라서 가져오는 함수 생성
- [x] 리스트 가져오는 파이프 수정
