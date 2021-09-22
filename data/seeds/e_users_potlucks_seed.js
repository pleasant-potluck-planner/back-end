const users_potlucks_list = [{
  user_id: 1,
  potluck_id: 1,
  guest: 0
},{
  user_id: 2,
  potluck_id: 2,
  guest: 0
},{
  user_id: 1,
  potluck_id: 3,
  guest: 0
},{
  user_id: 3,
  potluck_id: 1,
  guest: 1
},{
  user_id: 4,
  potluck_id: 1,
  guest: 1
},{
  user_id: 3,
  potluck_id: 2,
  guest: 1
},{
  user_id: 3,
  potluck_id: 3,
  guest: 0
},{
  user_id: 5,
  potluck_id: 2,
  guest: 0
},{
  user_id: 4,
  potluck_id: 3,
  guest: 1
},]

exports.seed = function(knex) {
  return knex('users_potlucks').insert(users_potlucks_list)
};