/* eslint-disable no-undef */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const env = {
    API_URL: phase === PHASE_DEVELOPMENT_SERVER ? "http://localhost:3000" : "",
  };

  return { env };
};
