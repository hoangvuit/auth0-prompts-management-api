/**
 * Required External Modules and Interfaces
 */

const express = require('express');
const { getCustomText, setCustomText } = require('./prompts.service');
const { checkJwt } = require('../authz/check-jwt');

/**
 * Router Definition
 */

const promptsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET prompts/

promptsRouter.get('/custom-text', (req, res) => {
  getCustomText(req.query).then(({ data }) => {
    res.status(200).send(data);
  });
});

promptsRouter.put('/custom-text', (req, res) => {
  const {
    body: { prompt },
  } = req;
  setCustomText(req.body).then(({ data }) => {
    res.status(200).send({ status: 'success', data: { [prompt]: data } });
  });
});

module.exports = {
  promptsRouter,
};
