const config = {
  stage: process.env.NODE_ENV,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = { config };
