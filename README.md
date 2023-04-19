# clean-fe-template

### 설치순서
```shell
git clone https://github.com/clean-fe/github-issues.git 

cd github-issues

npm install

npm run dev
```

---

# MVVM 전환 1차 목표
- [X] 기존 Old 코드 전부 제거
- [X] application, data, domain, presentation 레이어만 남기기
- [X] Issue, Label 기본 페이지 렌더
- [X] MVVM 에 맞춰 새 라우터 개발

# MVVM 전환 2차 목표 - 기존 구현 내용 중 전환하지 못 한것
- [X] Observable.js 을 Set -> Map 변경
- [X] Issue 페이지의 Open/Close 필터(클릭시 필터링 하는건 이후 MSW 연동하기로...)

# 이후 목표 - 2주차 완성하기
- [X] 기존 구현 내용 중 전환 못 한것 완료하기
- [ ] Issue 키워드 필터 & Label 키워드 필터
- [ ] New Issue & New Label 기능
- [ ] Labels, Milestones 이건 어떻게 해야하는거지...?
- [ ] Label View 에서 새로고침을 하면 Issue View 로 이동한다... 🤕

# 3주차 - 🤮
- [ ] MSW 설치 및 적용
- [ ] 비동기 에러 처리... escaping closure 와 비슷한 느낌인데...
  OOP 가 주도적이면 에러는 주변 코드로, 그리고 위로 propagation
  하면 되는데 Functional Programming 이 주도적이면 어떻게 처리?
  결국 동시성 문제로 빠져버리는 건가...?
- [ ] 최적화 종류 학습 및 정리

# 4주차 - Kill me...🫠


# To be continued... 4주차가 끝나고 언젠가...
- [ ] 데코레이터... PropertyWrapper 나 Annotation 과 비슷한데?
- [ ] 자바스크립트에 존재하지 않는 인스턴스의 deinit,
  함수나 클로저의 defer 를 대체할 방법...?
- [ ] 자바스크립트에도 약한 참조가 생겼다... WeakRef, WeakMap
- [ ] await all 되나...?
    - let photos = await [firstPhoto, secondPhoto, thirdPhoto] 이런 느낌으로
    - const [result1, result2] = await Promise.all([func1(), func2()]) 이게 되나?
- Actor 와 같은 동시성 코드에서 isolation 시키고 순차 접근을 할 수 있게
  전역 Store 구현이 가능할까? Actor 와 같은 isolation 이 불가능 하면
  많은 메모리 접근 충돌이 생길텐데??
  
