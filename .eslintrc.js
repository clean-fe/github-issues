module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    context: 'readonly',
    cy: 'readonly',
  },
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    /**
     * @see https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js 기본값은 링크 참고
     */
    // "plugin:react-hooks/recommended",
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:jest-formatting/recommended',
    // prettier는 배열의 가장 마지막에 위치해야 한다.
    'plugin:prettier/recommended',
  ],
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js', 'jest.setup.ts', 'node_modules/*', 'dist/*'],
  plugins: ['import'],
  rules: {
    /* eslint-plugin-prettier */
    'prettier/prettier': 'error', // prettier 코드 스타일이 어긋나면 eslint에 걸리도록 처리

    // /* eslint-plugin-react */
    // 'react/require-default-props': 0, // props 에 default 값을 지정 하지 않아도 됨
    // 'react/react-in-jsx-scope': 0, // jsx 를 사용하는 곳에 필수적으로 React 를 가져오지 않아도 됨
    // 'react/prop-types': 0,
    // 'react/jsx-boolean-value': 'error', // boolean true props 를 사용하지 않아도 됨
    // 'react/jsx-curly-brace-presence': [
    //   'error',
    //   { props: 'never', children: 'never' },
    // ],
    // "react/no-unknown-property": ["error", { "ignore": ["css"] }],

    /* eslint */
    curly: 1, // 중괄호 필수 적용
    'arrow-body-style': ['error', 'as-needed'], // 화살표 함수에서 바로 return 이 가능한 경우 함수 body 생략
    'padding-line-between-statements': [
      // 특정 코드 사이에 줄바꿈 추가
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // return 블럭 전에
      { blankLine: 'always', prev: '*', next: 'block' }, // 블럭 코드 전에
      { blankLine: 'always', prev: '*', next: 'block-like' }, // 유사 블럭 코드 전에
    ],

    /**
     * @see https://typescript-eslint.io/rules/no-shadow/
     */
    'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],

    /* @typescript-eslint/eslint-plugin */
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': ['error'],
    // '@typescript-eslint/restrict-template-expressions': 'off',
    // '@typescript-eslint/require-await': 'off',

    /* eslint-plugin-import */
    // 모듈 이름 기준(ex) react)으로 알파벳 순서대로 저장.
    // 상대 경로가 같은 것 끼리 저장.
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        // import { render, getByText }  from '@testing-library/react' <- 여기서 알파벳 순서에 따라 getByText가 앞으로 오게 된다.
        alphabetize: {
          order: 'asc',
          caseInsensitive: true, // 대소문자 구분
        },
        'newlines-between': 'always', // 구문 마다 공백 추가
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }], // import 구문 뒤에 공백
  },
};
