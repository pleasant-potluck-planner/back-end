
const users_list = [{
  user_name: "John",
  user_password: 1234
},{
  user_name: "Joe",
  user_password: 1234
},{
  user_name: "foo",
  user_password: 1234
},{
  user_name: "bar",
  user_password: 1234
},{
  user_name: "baz",
  user_password: 1234
}]

exports.seed = function(knex) {
  return knex('users').insert(users_list)
};