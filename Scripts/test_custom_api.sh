#! /bin/sh

curl -X GET -H "Content-Type: application/json" -d "{\"query\":\"${1}\"}" "imdb-api-request.herokuapp.com/${2}"
