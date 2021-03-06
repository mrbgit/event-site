'use strict';

const path = require('path');
const eatAuth = require('../scripts/eat_auth')(process.env.SECRET_KEY);

const catchAllRoutes = (router) => {

	/*Catch all route to send index.html for all routes that aren't used for data THIS ROUTE MUST BE LAST*/
  router.route('/*')
  .get(function(req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'));
  });

};

module.exports = catchAllRoutes;