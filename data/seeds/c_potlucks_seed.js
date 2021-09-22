
const potlucks_list = [{
  potluck_id: 1,
  potluck_name: "John's potluck",
  potluck_location: "John's house",
  potluck_date: "02-10-2022",
  potluck_time: "18:00",
  user_id: 1
},{
  potluck_id: 2,
  potluck_name: "Joe's birthday",
  potluck_location: "the big venue",
  potluck_date: "03-22-2022",
  potluck_time: "8:00",
  user_id: 2
},{
  potluck_id: 3,
  potluck_name: "John's potluck",
  potluck_location: 1234,
  potluck_date: "02-17-2022",
  potluck_time: "20:00",
  user_id: 1
},{
  potluck_id: 4,
  potluck_name: "Surprise!",
  potluck_location: "sshhuut... this is a secret",
  potluck_date: "03-03-2022",
  potluck_time: "21:00",
  user_id: 3
},{
  potluck_id: 5,
  potluck_name: "baz is back!",
  potluck_location: "gate 21 hall B",
  potluck_date: "1-1-2021",
  potluck_time: "6:30",
  user_id: 5
}]

exports.seed = function(knex) {
  return knex('potlucks').insert(potlucks_list)
};
