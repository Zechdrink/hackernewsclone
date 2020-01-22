// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/dev.sqlite3'
    },
    migrations: {
      directory: './migrations'
    },
  },

  // production: {
  //   client: 'postgresql',
  //   useNullAsDefault: true,
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   migrations: {
  //     directory: './migrations'
  //   },
  // }

};
