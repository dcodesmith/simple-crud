const _ = require('lodash');
const jsonfile = require('jsonfile');
const HTTPStatus = require('http-status');

const FILE = './employees.json';

module.exports = {
  getAll(req, res) {
    jsonfile.readFile(FILE, (err, data) => {
      if (err) {
        res.sendStatus(500);
      }
      res.status(200).json(data);
    });
  },

  getOne(req, res) {
    console.log('data', req.params);
    const email = req.params.email;
    const body = req.body;

    jsonfile.readFile(FILE, (err, readDoc) => {
      if (err) {
        res.sendStatus(500);
      }

      const doc = _.find(readDoc, { email });

      res.status(200).json(doc);
    });
  },

  create(req, res) {
    jsonfile.readFile(FILE, (readErr, readDoc) => {
      if (readErr) {
        res.sendStatus(500);
      }

      readDoc.push(req.body);

      jsonfile.writeFile(FILE, readDoc, (writeErr, doc) => {
        if (writeErr) {
          res.sendStatus(500);
        }

        res.status(201).json(doc);
      });
    });
  },

  update(req, res) {
    const email = req.params.email;
    const body = req.body;

    jsonfile.readFile(FILE, (readErr, readDoc) => {
      if (readErr) {
        res.sendStatus(500);
      }

      const index = _.findIndex(readDoc, { email });
      const docToBeUpdate = _.find(readDoc, { email });
      const dock = Object.assign({}, docToBeUpdate, body);

      readDoc.splice(index, 1);
      readDoc.splice(index, 0, dock);

      jsonfile.writeFile(FILE, readDoc, (writeErr, data) => {
        if (writeErr) {
          res.sendStatus(500);
        }

        res.status(201).json(data);
      });
    });
  },

  delete(req, res) {
    const email = req.params.email;
    const body = req.body;

    jsonfile.readFile(FILE, (readErr, readDoc) => {
      if (readErr) {
        res.sendStatus(500);
      }

      const index = _.findIndex(readDoc, { email });
      const docToBeDeleted = _.find(readDoc, { email });

      readDoc.splice(index, 1);

      jsonfile.writeFile(FILE, readDoc, (writeErr) => {
        if (writeErr) {
          res.sendStatus(500);
        }

        res.sendStatus(204);
      });
    });
  }
};
