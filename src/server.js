import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
console.log(process.cwd());

const app = express(); // create express application.
const logger = morgan("dev");

app.set("view engine", "pug"); // express app의 views로 pug를 사용하겠다!
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended : true})); // HTML form을 이해하고, 그 form을 우리가 사용할 수 있는 자바스크립트 object로 바꿔준다.
// urlencoded 라는 middleware가 videoRouter 정의 전에 오기 때문에 어떤 request가 videoRouter.post이르렀을 때, req.body는 이미 준비되어 있음.

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`Server Listening on Port http://localhost:${PORT}.`);
app.listen(PORT, handleListening);