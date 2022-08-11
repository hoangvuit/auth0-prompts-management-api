const dotenv = require('dotenv');

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;

if (!audience) {
  throw new Error(
    '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
  );
}

if (!domain) {
  throw new Error(
    '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
  );
}

if (!clientOriginUrl) {
  throw new Error(
    '.env is missing the definition of a APP_ORIGIN environmental variable'
  );
}

const clientOrigins = ['http://localhost:8080'];

module.exports = {
  audience,
  domain,
  clientOriginUrl,
  clientOrigins,
  clientId,
  clientSecret,
};
