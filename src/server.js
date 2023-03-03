import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express(); // create express application.
const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("<h1>This is Response.</h1>");
};

const handleLogin = (req, res) => {
    return res.send({message : "This is Login page."});
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server Listening on Port http://localhost:${PORT}.`);
app.listen(PORT, handleListening);