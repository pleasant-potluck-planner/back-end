const items_list = [{
  item_name: "chocolate cake"
},{
  item_name: "tapas"
},{
  item_name: "red wine"
},{
  item_name: "bread"
},{
  item_name: "olives"
},{
  item_name: "cheese plater"
},{
  item_name: "burritos"
},{
  item_name: "french fries"
},{
  item_name: "steaks"
},{
  item_name: "soft drinks"
},{
  item_name: "surprise"
}]

exports.seed = function(knex) {
  return knex('items').insert(items_list)
};
