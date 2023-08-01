# Bavel(가칭)-FE
> **2023 LIKELION-SYU HACKATHON**  


## Frontend
### Developer
* **이윤수**
* **김진홍**


### Tech
* React
* TypeScript
* Tailwind CSS

## 깃 브랜치 전략
깃 브랜치 전략은 `Github-Flow` 를 따릅니다.  
세부 정책은 다음과 같습니다.

### 1. 브랜치 정책
1. `main` 브랜치에서 작업하지 않는다.
2. 각 기능은 `feat/이슈번호` 의 브랜치를 만들어 작업한다.
3. 기능 별 브랜치의 작업이 완료되면 `pull request`를 요청한다.

### 2. 커밋 메시지
1. 커밋 메시지에는 이슈번호를 붙여주세요 (예시 : `git commit -m "#이슈번호 작업내용"` )
2. 이슈 메시지는 첫 줄에는 전체적인 내용을 포함하고 , 줄 바꿈 후 상세한 내용을 적어주세요.

### 3. ESLint
1. Lint 규칙은 [`airbnb`](https://github.com/airbnb/javascript) 의 규칙을 따릅니다.

### 4. Prettier
1. `prettier` 를 사용하여 코드를 포맷팅합니다.
2. 설치 후 다음과 같은 `.prettierrc` 파일을 루트 파일에 추가합니다.

```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid"
}

```
 
## 폴더 구조

### 기능 별로 컴포넌트를 분리합니다. (아래는 예시입니다.)
```
└── src/
    ├── features/
    │   │   # todo 폴더는 todo와 관련된 모든 것을 포함합니다.
    │   ├── todos/
    │   │   │   # 이 부분은 관련 모듈을 내보내기 위해 사용됩니다. (todos 컴포넌트입니다.)
    │   │   ├── index.js
    │   │   └── todoList/
    │   │       │   # TodoList 컴포넌트와 훅을 내보냅니다
    │   │       ├── index.js
    │   │       ├── TodoItem.js
    │   │       ├── TodoList.js
    │   ├── ui/
    │   │   ├── index.js
    │   │   ├── button/
    │   │   ├── card/
    │   │   ├── checkbox/
    │   │   ├── header/
    │   │   ├── footer/
    │   │   ├── modal/
    │   │   └── textField/
    │   └── users/
    │       ├── index.js
    │       ├── login/
    │       ├── signup/
    │       └── use-auth.js
    └── pages/
        │   # 페이지 폴더에는 간단한 JS 파일만 남아 있습니다.
        │   # 각 파일은 페이지를 나타냅니다.
        ├── Index.js
        ├── Login.js
        ├── Privacy.js
        ├── Project.js
        ├── Signup.js
        └── Terms.js

```

## 파일 네이밍 규칙

[`airbnb`](https://github.com/airbnb/javascript) 자바스크립트 스타일 가이드를 베이스로 한 네이밍 규칙을 따릅니다.

### 1. 컴포넌트 이름
- `PascalCase`를 사용하여 컴포넌트의 이름을 작성합니다.
- 컴포넌트의 이름은 명사로 지정하며, 최상위 부모 컴포넌트의 이름은 애플리케이션과 관련된 이름으로 작성합니다.

### 2. 변수 이름
- 변수 이름은 `camelCase`를 사용합니다.
- 상수는 모두 대문자로 작성하며, 단어는 밑줄(_)로 구분합니다.
```
// Good
const userName = "John Doe";
let itemCount = 5;
const MAX_COUNT = 10;

// Bad
const user_name = "John Doe";
let ItemCount = 5;
const maxCount = 10;
```

### 3. 함수 이름
- 변수 이름은 `camelCase`를 사용합니다.
- 함수 이름은 동사로 시작하여 함수의 동작을 명확히 드러낼 수 있도록 합니다.
```
// Good
function getUserData() {
  // ...
}

// Bad
function data() {
  // ...
}
```

### 4. 폴더 이름
- 폴더 이름은 `camelCase`로 작성합니다.
- 폴더 이름은 컴포넌트와 관련된 기능이나 역할을 잘 나타낼 수 있도록 작성합니다.

### 5. 타입
- 변수, 함수, 객체등의 타입을 `types/[name].type.ts` 로 명시적으로 선언합니다.

### 6. 인터페이스
- 객체의 구조를 명시하기 위해 인터페이스를 사용합니다.
- 인터페이스 이름은 `PascalCase`를 사용하며 , 기본적으로 해당 객체와 같은 이름을 가집니다.
- props에 대한 인터페이스는 후미에 props를 붙입니다.

```
interface Component1Props {
  a: string;
  b: number;
  c: boolean;
}

const Component1 = ({ a, b, c }: ComponentProps) => {
  // ...
}
```
