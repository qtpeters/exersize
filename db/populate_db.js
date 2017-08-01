#!/usr/bin/node

const fs = require( 'fs' );
const db = require( __dirname + '/initDb' )
const DbModelFunc = require( __dirname + '/dbModel' );
const dbModel = DbModelFunc({
  db: db,
  force: false
});

const json = fs.readFileSync( __dirname + '/../json/exercises.json' );
const exObj = JSON.parse( json );

exObj.exercises.forEach( ( ex ) => {
  dbModel.ExerciseSelection.create({
    name: ex.name,
    type: ex.type
  });
});

