#!/usr/bin/env nodejs
"use strict";

const express = require( 'express' );
const app = express();

let port = 6699;

app.use( express.static( 'client' ) );

app.listen( port, () => {
  console.log( `Example app listening on port ${port}!` )
});

