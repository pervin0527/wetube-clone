// node_modules에서 express를 찾는다는 것을 npm이 이해하고 수행.
// const express = require("express"); 와 동일.
import express from "express";

const PORT = 4000;
const app = express(); // create express application.

// addEventListener의 callback 함수가 event 인수 값을 js로부터 받는 것과 동일.
// request에 대한 object와 response에 대한 object를 express로부터 받는다.
const handleHome = (req, res) => {
    // 브라우저는 request를 보내고 서버로부터의 response를 받기 전까지 계속해서 대기 중.
    // return res.end(); // request를 종료시켜버린다. kill request.
    return res.send("This is Response.");

};
app.get("/", handleHome);

// route 추가.
const handleLogin = (req, res) => {
    return res.send("This is Login page.");
};
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server Listening on Port http://localhost:${PORT}.`);
app.listen(PORT, handleListening);