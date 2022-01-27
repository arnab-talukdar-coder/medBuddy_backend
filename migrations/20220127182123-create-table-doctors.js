'use strict';

const {
  DataTypes,
  DbTables
} = require("../config").constant;

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable(DbTables.Doctors, {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, notNull: true },
    email: { type: DataTypes.STRING, notNull: true },
    password: { type: DataTypes.STRING, notNull: true },
    phone_number: { type: DataTypes.STRING, notNull: true },
    is_active: { type: DataTypes.BOOLEAN, default: false, notNull: false },
    is_verified: { type: DataTypes.BOOLEAN, default: false, notNull: false },
    createdAt: { type: DataTypes.DATE_TIME, notNull: false },
    updatedAt: { type: DataTypes.DATE_TIME, notNull: false },
    deletedAt: { type: DataTypes.DATE_TIME, notNull: false },
  });
};

exports.down = function (db) {
  return db.dropTable(DbTables.Doctors);
};

exports._meta = {
  "version": 1
};
