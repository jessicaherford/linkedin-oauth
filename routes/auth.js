var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/auth/linkedin', passport.authenticate('linkedin'));

router.get('/logout', function(req, res, response){
  req.session = null;
  res.redirect('/');
})

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }),
function (req, res, next){
  console.log('**********');
  res.redirect('/');
})

module.exports = router;
