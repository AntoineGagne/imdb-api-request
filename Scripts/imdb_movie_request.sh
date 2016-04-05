#! /bin/sh

movie_name="${1}"
movie_name=$(echo "${movie_name}" | sed 's/\s/+/g')
request_url="http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=${movie_name}"

wget "${request_url}" -O "${movie_name}.json"

cat "${movie_name}.json" | python -m json.tool > tmp.json &&
    mv tmp.json "${movie_name}.json"
