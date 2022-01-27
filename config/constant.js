require("dotenv").config();

module.exports = { 
  Environment: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
  },

  DataTypes: {
    CHAR: 'char',
    STRING: 'string',
    TEXT: 'text',
    SMALLINT: 'smallint',
    BIGINT: 'bigint',
    INTEGER: 'int',
    SMALL_INTEGER: 'smallint',
    BIG_INTEGER: 'bigint',
    REAL: 'real',
    DATE: 'date',
    DATE_TIME: 'datetime',
    TIME: 'time',
    BLOB: 'blob',
    TIMESTAMP: 'timestamp',
    BINARY: 'binary',
    BOOLEAN: 'boolean',
    DECIMAL: 'decimal'
  },

  DbTables: {
    Doctors: 'doctors',
  }

};
