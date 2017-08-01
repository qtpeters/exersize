#!/usr/bin/env node
"use strict";

const dbApi = require( './components/database' )

dbApi.print();

process.exit( 0 );

const fs = require( 'fs' );
const express = require( 'express' );
const app = express();

const port = process.env.PORT || 6699;

app.use( express.static( 'client' ) );
app.get( "/exersizes", ( req, res ) => {
  return "None yet!"
});

app.listen( port, () => {
  console.log( `Workout app listening on port ${port}!` )
});
