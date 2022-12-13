
@films.each do |film|
  
    json.set! film.id do
      json.partial! 'api/films/film', film: film
    end

end
