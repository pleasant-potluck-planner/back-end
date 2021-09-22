
const users_list = [{
  user_id: 1,
  user_name: "John",
  user_password: 1234
},{
  user_id: 2,
  user_name: "Joe",
  user_password: 1234
},{
  user_id: 3,
  user_name: "foo",
  user_password: 1234
},{
  user_id: 4,
  user_name: "bar",
  user_password: 1234
},{
  user_id: 5,
  user_name: "baz",
  user_password: 1234
}]

exports.seed = function(knex) {
  return knex('users').insert(users_list)
};
