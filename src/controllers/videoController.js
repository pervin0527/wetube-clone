let videos = [
    {
        title: "Video #1",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 1,
        id : 1,
    },
    {
        title: "Video #2",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 59,
        id : 2,
    },
    {
        title: "Video #3",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 59,
        id : 3,
    },
];

export const trending = (req, res) => {
    res.render("home", {pageTitle : "Home", videos});
}
export const watchVideo = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render("watch", {pageTitle : `Watching : ${video.title}`, video});
}

// form을 화면에 보여주는 controller
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render("edit", {pageTitle : `Editing : ${video.title}`, video});
}

// 변경사항을 저장해주는 controller
export const postEdit = (req, res) => {

}