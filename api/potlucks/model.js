const db = require('../../data/db-config')

const getPotlucksByOrganizer = user_id => {
  /*
  This query gives necessary info to return proper shape for all potlucks organized by
   a particular user

  select u.user_name as organizer, p.user_id, p.potluck_id, p.potluck_name, p.potluck_location, p.potluck_time, p.potluck_date, pi.item_name, pi.user_name as guestBringing
  from potlucks p
  left join (
    select u2.user_id, u2.user_name
    from users u2
  ) as u
    on u.user_id = p.user_id
  left join (
    select *
    from potlucks_items pi2
    left join (
      select *
      from items i3
    ) as i2
    on i2.item_id = pi2.item_id
    left join (
      select u3.user_name, u3.user_id
      from users u3
    ) as u2
    on u2.user_id = pi2.user_id
  ) as pi
    on pi.potluck_id = p.potluck_id
  where p.user_id = 1;
  group by pi.potluck_id

  Shape desired:
[
  {
      organizer: "John",
      user_id: 1,
      potluck_id: 1,
      potluck_name: "John's Potluck",
      potluck_location: "John's House",
      potluck_time: '18:00:00',
      potluck_date: '2022-02-10',
      items: [
        {
          item_name: 'Chocolate Cake',
          guestBringingItem: 'John'
        },
        {
          item_name: 'Red Wine',
          guestBringingItem: 'John'
        }
      ]
    },
  {
      organizer: "John",
      user_id: 1,
      potluck_id: 2,
      potluck_name: "John's Potluck",
      potluck_location: "1234",
      potluck_time: '20:00:00',
      potluck_date: '2022-02-17',
      items: [
        {
          item_name: 'bread',
          guestBringingItem: 'foo'
        },
        {
          item_name: 'olives',
          guestBringingItem: 'Joe'
        }
      ]
    }
  ]
  */
}

const getPotlucksIfInvited = potluck_id => {
  /*

  Shape desired:

  */
}

const insertPotluck = async potluck => {
  const [newPotluck] = await db('potlucks')
    .insert(
      potluck,
      ['potluck_id', 'potluck_name', 'potluck_date', 'potluck_time', 'potluck_location']
    )
  return newPotluck
}

module.exports = {
  getPotlucksByOrganizer,
  getPotlucksIfInvited,
  insertPotluck
}
