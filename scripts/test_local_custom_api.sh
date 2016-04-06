#! /bin/sh

curl -X POST -H "Content-Type: application/json" -d "{\"query\":\"${1}\"}" "http://localhost:5000/${2}"
