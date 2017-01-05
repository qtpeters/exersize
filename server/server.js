#!/usr/bin/env nodejs
"use strict";

const database = "workout";

const express = require( 'express' );
const app = express();
const mongo = require( "mongodb" ).MongoClient
const url = `mongodb://localhost:27017/${database}`

let port = 6699;

app.use( express.static( 'client' ) );
app.get( "/exersizes", ( req, res ) => {
	mongo.connect( url, ( err, db ) => {
		
		let exersizes = db.collection( 'exersizes' ).find();
		let promise = exersizes.limit( 1 ).toArray();
		promise.then( ( doc ) => {
			let json = JSON.stringify( doc[0] );
			res.send( json );
		});

		db.close();
	});
});

app.listen( port, () => {
  console.log( `Workout app listening on port ${port}!` )
});

