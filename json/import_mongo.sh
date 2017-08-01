#!/bin/bash

function import() {

	mi=${1}
	database=${2}
	collection=${3}
	file=${collection}.json

	${mi} --db ${database} \
	--collection ${collection} \
	--drop --file ${file} \
	--jsonArray
}

mi=$( which mongoimport )
database=workout

import ${mi} ${database} exersizes
import ${mi} ${database} workouts
