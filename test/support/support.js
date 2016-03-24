var User = require('../../proxy/user');
var ready = require('ready');
var eventproxy = require('eventproxy');
var utility = require('utility');
var tools = require('../../common/tools');

function randomInt() {
    return (Math.random() * 10000).toFixed(0);
}

var createUser = exports.createUser = function (callback) {
    var key = new Date().getTime() + '_' + randomInt();
    tools.bhash('pass', function (err, passhash) {
        User.newAndSave('alsotang' + key, 'alsotang' + key, passhash, 'alsotang' + key + '@gmail.com', '', false, callback);
    });
};

exports.createUserByNameAndPwd = function (loginname, pwd, callback) {
    tools.bhash(pwd, function (err, passhash) {
        User.newAndSave(loginname, loginname, passhash, loginname + +new Date() + '@gmail.com', '', true, callback);
    });
};


function mockUser(user) {
    return 'mock_user=' + JSON.stringify(user) + ';';
}

ready(exports);

var ep = new eventproxy();
ep.fail(function (err) {
    console.error(err);
});

ep.all('user', 'user2', 'admin', function (user, user2, admin) {
    exports.normalUser = user;
    exports.normalUserCookie = mockUser(user);

    exports.normalUser2 = user2;
    exports.normalUser2Cookie = mockUser(user2);

    var adminObj = JSON.parse(JSON.stringify(admin));
    adminObj.is_admin = true;
    exports.adminUser = admin;
    exports.adminUserCookie = mockUser(adminObj);

});
createUser(ep.done('user'));
createUser(ep.done('user2'));
createUser(ep.done('admin'));



