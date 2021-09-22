const items_list = [{
  item_id: 1,
  item_name: "chocolate cake"
},{
  item_id: 2,
  item_name: "tapas"
},{
  item_id: 3,
  item_name: "red wine"
},{
  item_id: 4,
  item_name: "bread"
},{
  item_id: 5,
  item_name: "olives"
},{
  item_id: 6,
  item_name: "cheese platter"
},{
  item_id: 7,
  item_name: "burritos"
},{
  item_id: 8,
  item_name: "french fries"
},{
  item_id: 9,
  item_name: "steaks"
},{
  item_id: 10,
  item_name: "soft drinks"
},{
  item_id: 11,
  item_name: "surprise"
}]

exports.seed = function(knex) {
  return knex('items').insert(items_list)
};
