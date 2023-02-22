# <span id="top">두근두근 비밀일기 📓</span>

Window 95를 테마로 한 웹 다이어리 서비스

[🔗 실행 링크](https://my-diary-4bd77.firebaseapp.com/login)

<br>

## STACK
<table>
      <thead align="center">
        <tr>
          <th colspan="2" style="text-align:center;"><span style="font-size:16px;">프론트엔드</span></th>
          <th style="text-align:center;"><span style="font-size:16px">서버, 배포</span></th>
          <th style="text-align:center;"><span style="font-size:16px;">디자인</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" style="text-align:center;">
            <a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png" alt="React" height="50" /></a>
            <br>
            <code>React</code>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://styled-components.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components" height="50" /></a>
            <br>
            <code>styled-components</code>
          </td>
          <td align="center" style="text-align:center;">
            <a href="https://firebase.google.com/firebase" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png" alt="Firebase" height="50" /></a>
            <br>
            <code>Firebase</code>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://www.figma.com/community/file/914263431963912367" target="_blank">디자인 참고</a>
            <br>
          </td>
        </tr>
      </tbody>
</table>
<br>

## PREVIEW
- 일기 작성 & 목록 페이지

  <img width="70%" alt="image" src="https://user-images.githubusercontent.com/78977003/206836310-a37db19f-bae6-489d-afa3-321e2b51c375.png">
  
- 로그인 페이지

  <img width="70%" alt="image" src="https://user-images.githubusercontent.com/78977003/206836330-f1922665-dbf4-4e5e-be46-6347853dea4e.png">
  
- 회원가입 페이지

  <img width="70%" alt="image" src="https://user-images.githubusercontent.com/78977003/206836360-c7fb451c-eb25-4257-83b2-3bfe046d81d5.png">


## 리팩토링 사항
- [ ] 타입스크립트 마이그레이션
- [x] 글 삭제 시 모달창 띄우기
- [x] 글에 날짜도 디스플레이
- [ ] 모듈 CSS => 스타일드 컴포넌트로 변경
- [ ] 소셜로그인
- [x] 회원가입 유효성 검사(이미 있는 아이디 & 비밀번호 6자 이하)
- [ ] 다이어리 목록 리스트도 전역 상태관리 & 상태 표시줄에 나타내기
- [ ] 계산기 기능
- [x] 전역 상태 추가 -> redux로 관리
