const users_potlucks_list = [{
  user_id: 1,
  potluck_id: 1,
  guest: false
},{
  user_id: 2,
  potluck_id: 2,
  guest: false
},{
  user_id: 1,
  potluck_id: 3,
  guest: true
},{
  user_id: 3,
  potluck_id: 1,
  guest: true
},{
  user_id: 4,
  potluck_id: 1,
  guest: true
},{
  user_id: 3,
  potluck_id: 2,
  guest: true
},{
  user_id: 3,
  potluck_id: 3,
  guest: true
},{
  user_id: 5,
  potluck_id: 2,
  guest: true
},{
  user_id: 4,
  potluck_id: 3,
  guest: true
},]

exports.seed = function(knex) {
  return knex('users_potlucks').insert(users_potlucks_list)
};
