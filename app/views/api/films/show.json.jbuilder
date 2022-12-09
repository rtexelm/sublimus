json.film do
  json.partial! '/api/films/film', film: @film
end