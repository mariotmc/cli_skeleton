const loggerFactory = require("../logger");
const logger = loggerFactory("commands:start");

module.exports = function start(config) {
  logger.highlight("  Starting the app  ");
  logger.debug("Received configuration", config);
};
