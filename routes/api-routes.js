const db = require("../models");
const getDisasterEvents = require('./api/disaster.js');

module.exports = function (app) {
  app.get('/api/disasters', function (req, res, next) {
    getDisasterEvents(disasters => res.json(disasters));
  });

  app.get('/api/readykit', function (req, res, next) {
    db.ReadyKit.findAll()
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });

  app.get('/api/readykit/:id', function (req, res, next) {
    db.ReadyKit.findByPk(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });

  app.get('/api/readykit/search/:currentUserName', function (req, res, next) {
    db.ReadyKit.findOne({ where: { currentUserName:  req.params.currentUserName } } )
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });
}
