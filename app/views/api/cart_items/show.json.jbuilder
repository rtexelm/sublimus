json.extract! @item, :id, :quantity, :film_id
json.extract! @item.film, :title, :price