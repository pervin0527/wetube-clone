import Video from "../models/Video";

export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", {pageTitle : "Home", videos});
};


export const watchVideo = (req, res) => {
    const { id } = req.params;
    return res.render("watch", {pageTitle : `Watching`});
};

export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", {pageTitle : `Editing`});
};

export const postEdit = (req, res) => {
    const { id } = req.params;
    const {title} = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle : "Upload video"});
};

export const postUpload = async(req, res) => {
    console.log(req.body);
    
    const {title, description, hashtags} = req.body;
    try{
        await Video.create({
            title : title,
            description : description,
            // createdAt : Date.now(),
            hashtags : hashtags.split(",").map((word) => `#${word}`),
            meta : {
                views:0,
                rating:0
            }
        })
        return res.redirect("/");
    }
    catch(error){
        console.log(error);
        return res.render("upload", {pageTitle : "Upload video", errorMessage : error._message});
    }
};