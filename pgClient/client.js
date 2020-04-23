const { Client } = require("pg");

const pgClient = () => {
  return new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
  });
};

module.exports = pgClient;
