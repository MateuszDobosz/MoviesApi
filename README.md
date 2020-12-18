# MoviesApi

## live: http://176.107.131.27:5005/

## ENDPOINTS:
### GET: 
- /movies - returns all movies from database 
- /movies?sortBy=year/title/id/createdAt - returns all movies sorted by year/title/id/createdAt
- /movies?orderBy=desc/asc - returns all movies ordered descending/ascending
- /movies?sortBy=year&orderBy=desc returns all movies sorted by year and ordered descending (works with examples from above)
- /movies/id - returns specified movie
- /comments - returns all comments from database
- /comments/id - returns comments from specified movie

### POST:
- /movies - adds movie to database, title is required in body
- /comment - adds comment to database, movieId and text are required in body
