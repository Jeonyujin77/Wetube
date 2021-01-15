import express from 'express';
import morgan from 'morgan'; // [middleware] morgan: 로그 기록 시 사용
import helmet from 'helmet'; // [middleware] helmet: 보안
import cookieParser from 'cookie-parser'; // [middleware] cookie-parser: session을 다룰 시 사용
import bodyParser from 'body-parser'; // [middleware] body-parser: form 데이터를 서버로 받아와서 활용
import { userRouter } from './router'; // 사용자 라우터
const app = express();

const handleHome = (req, res) => res.send('Hello From Home.');

const handleProfile = (req, res) => res.send('You are on my profile.');

/** 
 * middleware 사용 예시: 사용자의 로그인 여부 판단, 파일 전송 시 중간에서 개입해서 업로드, 로그 기록 etc...
 * 주의점: 순서에 따라 결과가 달라지므로 작성순서가 중요하다.
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());


app.get('/', handleHome);

app.get('/profile', handleProfile);

app.use('/user', userRouter);

export default app;