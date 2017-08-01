#!/usr/bin/env node
"use strict";

const dbApi = require( './components/database' )

const fs = require( 'fs' );
const express = require( 'express' );
const app = express();

const port = process.env.PORT || 6699;

app.use( express.static( 'client' ) );

app.get( "/exercises", ( req, res ) => {
  
  dbApi.getExercises().then( ( exs ) => {
    const mappedExs = exs.map( ( ex ) => {
      let dvs = ex.dataValues;
      return { 
        name: dvs.name, 
        type: dvs.type 
      };
    });
    
    res.send( JSON.stringify( mappedExs ) );
  });
});

app.listen( port, () => {
  console.log( `Workout app listening on port ${port}!` )
});
