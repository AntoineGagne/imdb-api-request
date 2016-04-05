#! /bin/sh

movie_id="${1}"
request_url="http://app.imdb.com/title/maindetails?tconst=${movie_id}"

wget "${request_url}" -O "${movie_id}.json"

cat "${movie_id}.json" | python -m json.tool > tmp.json &&
    mv tmp.json "${movie_id}.json"
