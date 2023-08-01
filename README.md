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
 
