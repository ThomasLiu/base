/**
 * Created by user on 11/6/15.
 */

/**
 * Module dependencies.
 */
var express          = require('express');
var site             = require('./controllers/site');
var sign             = require('./controllers/sign');
var manage             = require('./controllers/manage');
var upload = require('./controllers/upload');
var passport         = require('passport');
var config           = require('./web_config');

var auth = require('./middlewares/auth');

var router           = express.Router();


// home page
router.get('/', site.index);


// sitemap
router.get('/sitemap.xml', site.sitemap);

/**
 * ------------------------------------------------------------------
 * 基础的注册 登录 退出 激活 找回密码
 * ------------------------------------------------------------------
 */
if (config.allow_sign_up) {
    router.get('/signup', sign.showSignup); // 跳转到注册界面
    router.post('/signup', sign.signup);  // 提交注册信息
}
router.get('/active_account', sign.activeAccount);  //帐号激活
router.get('/signout', sign.signout);  // 登出
router.get('/signin', sign.showLogin);
router.post('/signin', sign.login);  // 登录校验

router.get('/search_pass', sign.showSearchPass);  // 找回密码页面
router.post('/search_pass', sign.updateSearchPass);  // 更新密码
router.get('/reset_pass', sign.resetPass);  // 进入重置密码页面
router.post('/reset_pass', sign.updatePass);  // 更新密码

// ------------------------------------------------------------------


/**
 * ------------------------------------------------------------------
 * 上传文件
 * ------------------------------------------------------------------
 */
router.post('/upload', auth.userRequired, upload.upload); //上传图片
router.post('/ueditorUpload', auth.userRequired, upload.ueditorUpload); //上传图片
// ------------------------------------------------------------------

router.get('/manage', auth.userRequired, manage.index);  // 进入重置密码页面



module.exports = router;