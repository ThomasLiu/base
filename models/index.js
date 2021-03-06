/**
 * Created by user on 15/6/15.
 */
var mongoose = require('mongoose');
var config = require('../web_config');

mongoose.connect(config.db, function (err) {
   if (err) {
       console.error('connect to %s error: ', config.db, err.message);
       process.exit(1);
   }
});

// models
require('./user');

exports.User = mongoose.model('User');