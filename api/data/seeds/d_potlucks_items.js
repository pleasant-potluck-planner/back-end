
const potlucks_items_list = [{
  item_id: 1,
  potluck_id: 1,
  user_id: 1
},
{
  item_id: 3,
  potluck_id: 1,
  user_id: 1
},
{
  item_id: 2,
  potluck_id: 2,
  user_id: 2
},
{
  item_id: 4,
  potluck_id: 3,
  user_id: 3
},
{
  item_id: 5,
  potluck_id: 3,
  user_id: 2
},
{
  item_id: 4,
  potluck_id: 4,
  user_id: 4
},
{
  item_id: 3,
  potluck_id: 4,
  user_id: 2
},
{
  item_id: 4,
  potluck_id: 4,
  user_id:2
},
]

exports.seed = function(knex) {
  return knex('potlucks_items').insert(potlucks_items_list)
};
