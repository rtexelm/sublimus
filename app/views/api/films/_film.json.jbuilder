json.extract! film, 
  :id, 
  :title,
  :director,
  :description, 
  :year,
  :price
  
# if bench.photo.attached?
#   json.photo_url url_for(bench.photo) 
# else
#   json.photo_url "/bench_placeholder.png"
# end