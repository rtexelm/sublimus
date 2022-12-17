json.extract! film, 
  :id, 
  :title,
  :director,
  :description, 
  :year,
  :price

# Exmaple code for photo inclusion from Bench_BnB
# if bench.photo.attached?
#   json.photo_url url_for(bench.photo) 
# else
#   json.photo_url "/bench_placeholder.png"
# end