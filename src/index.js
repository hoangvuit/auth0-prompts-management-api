/**
 * Required External Modules
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { clientOrigins } = require('./config/env.dev');
const { promptsRouter } = require('./prompts/prompts.router');

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use('/api', apiRouter);

apiRouter.use('/prompts', promptsRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

const PORT = 6060;
app.listen(process.env.PORT || PORT, () =>
  console.log(`API Server listening on port ${PORT}`)
);
