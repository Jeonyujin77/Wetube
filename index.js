import express from 'express';
const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => res.send('Hello From Home.');

const handleProfile = (req, res) => res.send('You are on my profile.');

// middleware 사용 예시: 사용자의 로그인 여부 판단, 파일 전송 시 중간에서 개입해서 업로드, 로그 기록 etc...
const betweenHome = (req, res, next) => {
    console.log('Between');
    next(); // handleHome 호출
};

// 작성 순서가 중요 -> 순서에 따라 middleware 적용 유무를 판단
app.use(betweenHome);

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);