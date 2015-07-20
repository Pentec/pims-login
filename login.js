 //Created by Ruth on 2015-07-09.
var mongoose = require('mongoose');

var authenticate = function(username, password, callback) {
    var foundUser = false;

    var user = mongoose.model('users');
    user.findOne({username: username, password: password}, function(err, found){
        if(err) {
            console.log("DB error");
            callback(err);
        }

        if(found) {
            foundUser = true;
            if(found.user_rights == 1)
            {
                console.log('User is admin');

            }
            else
            {
                console.log('Not admin');
            }
            console.log(foundUser.valueOf());
            return callback(foundUser);

        }
        else
        {
            foundUser = false;
            return callback(foundUser);
        }

    });

}

module.exports.authenticate = authenticate;
