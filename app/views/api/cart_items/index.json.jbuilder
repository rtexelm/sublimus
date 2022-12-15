if @items
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :quantity
      json.extract! item.film, :title, :price
    end
  end
else
  json.title 'Cart Is Empty'
end