module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/weather.db3"
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    useNullAsDefault: true,
  },
};
