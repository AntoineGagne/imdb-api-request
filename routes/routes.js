var express = require('express');
var router  = express.Router();
var routes  = require('./medias');

router.route('/tasks/:id')
   .get(routes.getTask);

module.exports.router = router;
