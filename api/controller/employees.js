const _ = require('lodash');
const jsonfile = require('jsonfile');
const HTTPStatus = require('http-status');
const utils = require('../utils');

const FILE = './employees.json';

module.exports = {
  getAll(req, res) {
    jsonfile.readFile(FILE, (err, data) => {
      if (err) {
        res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
      }

      res.status(HTTPStatus.OK).json(data);
    });
  },

  getOne(req, res) {
    const email = req.params.email;

    jsonfile.readFile(FILE, (err, readDoc) => {
      if (err) {
        res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
      }

      const doc = _.find(readDoc, { email });

      if (!doc) {
        res.status(HTTPStatus.NOT_FOUND).json({ message: `User with email ${email} not found` });
        return;
      }

      res.status(HTTPStatus.OK).json(doc);
    });
  },

  create(req, res) {
    const user = req.body;

    jsonfile.readFile(FILE, (readErr, users) => {
      if (readErr) {
        res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
      }

      if (utils.userAlreadyExists(users, user)) {
        res.status(HTTPStatus.CONFLICT).json({ message: `User with the name ${user.firstname} ${user.surname} already exists` });
        return;
      }

      users.push(user);

      jsonfile.writeFile(FILE, users, (writeErr) => {
        if (writeErr) {
          res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
        }

        res.status(HTTPStatus.CREATED).json(user);
      });
    });
  },

  update(req, res) {
    const email = req.params.email;
    const body = req.body;

    jsonfile.readFile(FILE, (readErr, readDoc) => {
      if (readErr) {
        res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
      }

      const index = _.findIndex(readDoc, { email });
      const docToBeUpdate = _.find(readDoc, { email });

      if (!docToBeUpdate) {
        res.status(HTTPStatus.NOT_FOUND).json({ message: `User with email ${email} not found` });
        return;
      }

      const dock = Object.assign({}, docToBeUpdate, body);

      readDoc.splice(index, 1);
      readDoc.splice(index, 0, dock);

      jsonfile.writeFile(FILE, readDoc, (writeErr) => {
        if (writeErr) {
          res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
        }

        // NOTE: trigger reload on client side after update;
        res.sendStatus(HTTPStatus.NO_CONTENT);
      });
    });
  },

  delete(req, res) {
    const email = req.params.email;

    jsonfile.readFile(FILE, (readErr, readDoc) => {
      if (readErr) {
        res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
      }

      const index = _.findIndex(readDoc, { email });

      readDoc.splice(index, 1);

      jsonfile.writeFile(FILE, readDoc, (writeErr) => {
        if (writeErr) {
          res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
        }

        // NOTE: trigger reload on client side after update;
        res.sendStatus(HTTPStatus.NO_CONTENT);
      });
    });
  }
};
