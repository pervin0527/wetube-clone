export const trending = (req, res) => {
    const videos = [
        {
            title: "Video #1",
            rating : 5,
            comments : 2,
            createdAt : "2 minutes ago",
            views : 59,
            id : 1,
        },
        {
            title: "Video #2",
            rating : 5,
            comments : 2,
            createdAt : "2 minutes ago",
            views : 59,
            id : 1,
        },
        {
            title: "Video #3",
            rating : 5,
            comments : 2,
            createdAt : "2 minutes ago",
            views : 59,
            id : 1,
        },
    ];
    res.render("home", {pageTitle : "Home", videos});
}
export const watchVideo = (req, res) => res.render("watch", {pageTitle : "Watch Video"});
export const editVideo = (req, res) => res.render("edit", {pageTitle : "Edit Video"});
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Remove Video");
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");