# imdb-api-request

An API that redirects calls to IMDB secret API.

## Examples

The `examples` folder has examples of API response.

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

Returns:
    List of movies or TV shows

- `POST /search/actors`:

Parameter:

```js
{
    "query": "actor+name"
}
```

Returns:
    List of actors

### Get by ID

- `GET /medias/:id`:

Parameter:

```js
    id: The IMDB id of the media
```

Returns:
    The informations of the movie

- `POST /medias/images`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

Returns:
    The images of a movie

- `POST /medias/credits`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

Returns:
    The credits of the movie

- `POST /medias/usercomments`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

Returns:
    The user comments of the movie

- `POST /medias/plot`:

Parameter:

```js
{
    "query": "media+imdb+id"
}
```

Returns:
    The plot of the movie

- `GET /medias/top/tvshows`:

Returns:
    List of the 250 top rated TV shows

- `GET /medias/top/movies`:

Returns:
    List of the 250 top rated movies

- `GET /actors/:id`:

Parameter:

```js
    id: The IMDB id of the actor
```

Returns:
    The informations of the actor
