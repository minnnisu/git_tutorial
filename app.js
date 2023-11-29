const express = require("express");
const app = express();
const port = 3000;

// EJS를 뷰 엔진으로 설정
app.set("view engine", "ejs");

// 정적 파일 서비스 설정 (public 폴더에는 스타일 시트 및 기타 정적 파일이 있을 수 있습니다)
app.use(express.static("public"));

// 루트 경로에 대한 라우터 설정
app.get("/", (req, res) => {
  res.render("index", { title: "Express with EJS" });
});

app.get("/login", (req, res) => {
  //   res.render("index", { title: "Express with EJS" });
  res.send("로그인 페이지");
});

app.get("/logout", (req, res) => {
  //   res.render("index", { title: "Express with EJS" });
  res.send("로그아웃 페이지");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
