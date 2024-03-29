const pgp = require("pg-promise");

class Connection {
  constructor() {
    this.connection = pgp()(process.env.DATABASE_URL);
  }

  query(statement, params) {
    return this.connection.query(statement, params);
  }
}

module.exports = Connection;
