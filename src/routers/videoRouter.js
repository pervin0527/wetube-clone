import express from "express";
import {watchVideo, getEdit, postEdit, getUpload, postUpload} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);

export default videoRouter;