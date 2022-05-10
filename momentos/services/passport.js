const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=>{
            done(null,user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "/auth/google/callback"
},
function(accessToken,refreshToken,profile,done){
    User.findOne({googleID : profile.id})
        .then(existingUser=>{
            if(existingUser){
                done(null,existingUser);
            }else{
                new User({googleID: profile.id}).save()
                    .then(user=>{
                        done(null,user);
                    });
            }
        })
}
));

