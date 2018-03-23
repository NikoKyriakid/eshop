const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'NikolaosK-test', bundle: 'js/bundle.js' });
});

module.exports = router;
