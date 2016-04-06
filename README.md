# imdb-api-request

An API that redirects calls to IMDB secret API.

## API Documentation

This section lists all the routes of the API along with the required parameters.

### Search by title/name

- `POST /search/medias`:

Parameter:

```js
{
    "query": "movie+or+tv+show+title"
}
```

- `POST /search/actors`:

Parameter:

```js
{
    "query": "actor+name"
}
```

### Get by ID

- `POST /medias`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `POST /medias/images`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `POST /medias/credits`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `POST /medias/usercomments`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `POST /medias/plot`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `GET /medias/top/tvshows`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `GET /medias/top/movies`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

- `POST /actors`:

Parameter:

```js
{
    "query": "actor+imdb+id"
}
```
