//sign up
exports.index = (req, res) => {
    req.session._loginReferer = req.headers.referer;
    res.render('manage/index')
}