#!/usr/bin/node

const db = require( __dirname + '/initDb' )
const DbModelFunc = require( __dirname + '/dbModel' );
const dbModel = DbModelFunc({
  db: db,
  force: true
});
