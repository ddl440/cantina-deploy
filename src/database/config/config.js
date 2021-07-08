module.exports = {
  "development": {
    "username": 'root',
    "password": 'rootroot',
    "database": 'cantina',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
