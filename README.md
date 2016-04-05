# imdb-api-request

An API that redirects calls to IMDB secret API.

## API Documentation

This section lists all the routes of the API along with the required parameters.

### Search by title/name

- `GET /search/medias`:

Parameter:

```js
{
    "query": "movie or tv show title"
}
```

- `GET /search/actors`:

Parameter:

```js
{
    "query": "actor name"
}
```

### Get by ID

- `GET /medias`:

Parameter:

```js
{
    "query": "media imdb id"
}
```

- `GET /actors`:

Parameter:

```js
{
    "query": "actor imdb id"
}
```
