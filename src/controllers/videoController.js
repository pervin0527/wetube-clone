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
    return res.render("home", {pageTitle : "Home", videos});
};

export const watchVideo = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", {pageTitle : `Watching : ${video.title}`, video});
};

// form을 화면에 보여주는 controller
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", {pageTitle : `Editing : ${video.title}`, video});
};

// 변경사항을 저장해주는 controller
export const postEdit = (req, res) => {
    const { id } = req.params;
    const {title} = req.body; // form에 있는 value를 자바스크립트 형식으로 표현하는 것. 단 middleware가 필요하다.
    // console.log(title);    // input의 name 속성 값과 동일해야 함. 아니면 못찾음.
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`); // 브라우저가 자동으로 이동(redirect)하도록 한다.
};