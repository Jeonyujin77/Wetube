import express from 'express';
import morgan from 'morgan'; // [middleware] morgan: 로그 기록 시 사용
import helmet from 'helmet'; // [middleware] helmet: 보안
import cookieParser from 'cookie-parser'; // [middleware] cookie-parser: session을 다룰 시 사용
import bodyParser from 'body-parser'; // [middleware] body-parser: form 데이터를 서버로 받아와서 활용
import userRouter from './routers/userRouter'; // 사용자 라우터
import videoRouter from './routers/videoRouter'; // 비디오 라우터
import globalRouter from './routers/globalRouter'; // 전역 라우터
const app = express();

/** 
 * middleware 사용 예시: 사용자의 로그인 여부 판단, 파일 전송 시 중간에서 개입해서 업로드, 로그 기록 etc...
 * 주의점: 순서에 따라 결과가 달라지므로 작성순서가 중요하다.
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

export default app;