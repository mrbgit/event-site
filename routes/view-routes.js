'use strict';

var Contact = require('../models/Contact');
var NewsletterSignup = require('../models/NewsletterSignup');
var bodyparser = require('body-parser');
var path = require('path');
var Sql = require('sequelize');
var sql = new Sql('events_page', 'eventsUser', 'p@ssw0rd1', {
  host: 'localhost',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = function (router) {
	router.use(bodyparser.json());
  router.use(bodyparser.urlencoded({
    extended: true
  }));

	router.route('/')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  router.route('/past-events')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/past-events.html'));
  });

  router.route('/meet-the-team')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/meet-the-team.html'));
  });

  router.route('/media')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/media.html'));
  });

	router.route('/find-an-event')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/find-an-event.html'));
  });

	router.route('/faq')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/faq.html'));
  });

	router.route('/santa-clara-2015')
  .get(function (req, res) {
   res.sendFile(path.join(__dirname, '../views/events/santa-clara-2015.html'));
  }); 

	router.route('/santa-clara-2015')
  .get(function (req, res) {
   res.sendFile(path.join(__dirname, '../views/events/santa-clara-2015.html'));
  });

  router.route('/latest-news')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/latest-news.html'));
  });

  router.route('/map')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '../views/world-map.html'));
  });

}