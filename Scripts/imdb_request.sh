#! /bin/sh

actor_name=$(echo "${1}" | sed 's/\s/+/g')
imdb_request_url="http://www.imdb.com/xml/find?json=1&nr=1&nm=on&q=${actor_name}"

wget ${imdb_request_url} -O "${actor_name}.json"

cat "${actor_name}.json" | python -m json.tool > tmp.json &&
    mv tmp.json "${actor_name}.json"
