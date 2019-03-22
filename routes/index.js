var express = require('express');
var router = express.Router();

const data = require(`../data`);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '700', mainimage: 'yeezy_side.png', bio: 'Introducing the Yeezy 700 Inertia. The “Inertia” uses a grayscale combination of light and medium tones, allowing the suede, mesh, and leather construction of the heavily paneled upper to take center stage.' });
});

router.get('/:user', function(req, res, next) {
  console.log('data:', data);
  console.log('user:', req.params.user);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
