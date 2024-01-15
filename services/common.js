const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTJhZjM0NTBmMzI5ZjI2NzZjYWIxYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA1MjA5MTQ4fQ.YT9wXoGB-t4iE9fyoSSJy1Ad8g7luRnnhecxesd4Z6w"
  return token;
};
