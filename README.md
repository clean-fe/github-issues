# clean-fe-template

### 설치순서

```shell
git clone https://github.com/clean-fe/github-issues.git

cd github-issues

npm install

npm run dev
```

구현 요구사항

1. 데이터 요청
   초기 데이터는 fetch 요청을 통해서 가져온다.

URL : /data-sources/issues.json, labels.json

2. 함수 사용
   배열의 고차 함수 적극 사용.

여러개의 작은 함수를 만들어야 함.

짧은 함수를 화살표 함수로 표현(람다표기법)

중복 코드 최대한 없게.

콜백함수도 가급적 분리

- 함수 합성 시도하기.

pipeline 방식.

필요하면 currying 기법으로 합성가능하도록 바인딩처리.

3. ES Modules 활용
   ES Modules을 사용

main.js 가 entry point 역할임. 그외 필요한 js 모듈(파일)을 생성해서 구현할 수 있음.
