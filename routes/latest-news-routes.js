'use strict';

var Contact = require('../models/Contact');
var NewsletterSignup = require('../models/NewsletterSignup');
var bodyparser = require('body-parser');
var path = require('path');
/*var Sql = require('sequelize');
var sql = new Sql('events_page', 'eventsUser', 'p@ssw0rd1', {
  host: 'localhost',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});*/

module.exports = function (router) {
  router.use(bodyparser.json());

  router.route('/latest-news')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/latest-news.html'));
  })
  .post(function (req, res) {
    sql.sync()
    .then(function (data) {
      NewsletterSignup.create(req.body);
      res.sendFile(path.join(__dirname, '../views/latest-news.html'));
    })
    .error(function (err) {
      console.log(err);
      res.status(500).json({msg: 'internal server error'});
    });
  });
};