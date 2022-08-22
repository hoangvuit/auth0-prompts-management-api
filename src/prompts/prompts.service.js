/**
 * Service Methods
 */

const axios = require('axios');
const {
  audience,
  clientId,
  clientSecret,
  domain,
} = require('../config/env.dev');

const getAccessToken = () => {
  return axios.post('https://tinypulse-staging.us.auth0.com/oauth/token', {
    audience: audience,
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  });
};

const getCustomText = async ({ prompt }) => {
  const {
    data: { access_token },
  } = await getAccessToken();

  const options = {
    method: 'GET',
    url: `https://${domain}/api/v2/prompts/${prompt}/custom-text/en`,
    headers: { Authorization: `Bearer ${access_token}` },
  };

  return axios(options);
};

const setCustomText = async ({ prompt, content }) => {
  const {
    data: { access_token },
  } = await getAccessToken();

  const options = {
    method: 'PUT',
    url: `https://${domain}/api/v2/prompts/${prompt}/custom-text/en`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    data: content,
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCustomText,
  setCustomText,
};
