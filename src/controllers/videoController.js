const fakeUser = {
    username : "Jun",
    loggedIn : true,
}

export const trending = (req, res) => res.render("home", {pageTitle : "Home", fakeUser});
export const watchVideo = (req, res) => res.render("watch", {pageTitle : "Watch Video"});
export const editVideo = (req, res) => res.render("edit", {pageTitle : "Edit Video"});
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Remove Video");
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");