@cart.cart_items.each do |item|
  json.set! item.id do
    json.extract! item, :quantity
    json.extract! item.film, :title, :price
  end
end