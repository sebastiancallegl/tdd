var express = require('express');
var router = express.Router();
const agenda = require('../agenda');

/* GET home page. */
router.get('/user/:id', function(req, res, next) {
    const userData = agenda.getUser(req.params.id);
    res.status(200).send({ response: userData })
});

module.exports = router;
