#! /bin/sh

actor_id="${1}"
request_url="http://app.imdb.com/name/maindetails?nconst=${1}"

wget "${request_url}" -O "${actor_id}.json"

cat "${actor_id}.json" | python -m json.tool > tmp.json &&
    mv tmp.json "${actor_id}.json"
