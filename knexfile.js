
// Update with your config settings.
const dbConnection = process.env.DATABASE_URL
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/fitness.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "sqlite3",
    connection:  dbConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON", done);
    }
  }
};
