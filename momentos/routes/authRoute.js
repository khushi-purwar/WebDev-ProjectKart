const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile'] }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/dashboard');
    });

    app.get('/api/current_user', (req, res) => {
        res.json(req.user);
        console.log(req.user);
    });
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}
