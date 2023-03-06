export const trending = (req, res) => res.send("Trending"); 
export const watchVideo = (req, res) => {
    console.log(req.params);
    return res.send(`Watch Video #${req.params.id}`);
}; 
export const editVideo = (req, res) => {
    console.log(req.params);
    res.send("Edit Video");
};
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Remove Video");
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");