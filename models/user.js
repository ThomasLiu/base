/**
 * Created by user on 15/6/15.
 */
var mongoose  = require('mongoose');
var BaseModel = require("./base_model");
var Schema    = mongoose.Schema;
var utility   = require('utility');

var UserSchema = new Schema({
    name: { type: String},
    loginname: { type: String},
    pass: { type: String },
    email: { type: String},
    avatar: { type: String },

    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    is_star: { type: Boolean },
    level: { type: String },
    active: { type: Boolean, default: false },

    receive_reply_mail: {type: Boolean, default: false },
    receive_at_mail: { type: Boolean, default: false },
    from_wp: { type: Boolean },

    retrieve_time: {type: Number},
    retrieve_key: {type: String},

    accessToken: {type: String},
});

UserSchema.plugin(BaseModel);


UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});
UserSchema.index({score: -1});
UserSchema.index({githubId: 1});
UserSchema.index({accessToken: 1});

mongoose.model('User', UserSchema);