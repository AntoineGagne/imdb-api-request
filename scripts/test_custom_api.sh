#! /bin/sh

curl -X POST -H "Content-Type: application/json" -d "{\"query\":\"${1}\"}" "imdb-api-request.herokuapp.com/${2}"
