#!/usr/bin/env node
"use strict";

const database = "workout";

const express = require( 'express' );
const app = express();

const mongo = require( "mongodb" ).MongoClient
const url = `mongodb://localhost:27017/${database}`

const fs = require( 'fs' );

let port = 6699;

app.use( express.static( 'client' ) );
app.get( "/exersizes/:how", ( req, res ) => {

	switch ( req.params.how === 'db' ) {
		case 'db':
			_getFromDB( res );
			break;
		default: 
			_getFromFile( res );
	}
});

app.listen( port, () => {
  console.log( `Workout app listening on port ${port}!` )
});

function _getFromFile( res ) {
	res.send( fs.readFileSync( '../json/exersizes.json' ) );
}

function _getFromDB( res ) {
	mongo.connect( url, ( err, db ) => {
				
		let exersizes = db.collection( 'exersizes' ).find();
		let promise = exersizes.limit( 1 ).toArray();
		promise.then( ( doc ) => {
			let json = JSON.stringify( doc[0] );
			res.send( json );
		});

		db.close();
	});
}
