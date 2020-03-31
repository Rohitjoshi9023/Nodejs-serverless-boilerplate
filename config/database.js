module.exports = {
  default_conn: env("DB_CONNECTION", "mysql"),

  mysql: {
    host: env("MYSQL_HOSTNAME", "localhost"),
    database: env("MYSQL_DATABASE", ""),
    username: env("MYSQL_USERNAME", ""),
    password: env("MYSQL_PASSWORD", ""),
    port: env("MYSQL_PORT", "3306")
  }
};
