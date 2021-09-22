const db = require('../../data/db-config')

const getPotluckById = potluck_id => {
  /*
  This query gives necessary info to return proper shape

  select p.* , u.user_name organizer, i.item_name, u2.user_name guestBringingItem
  from potlucks p
  left join potlucks_items pi
    on pi.potluck_id = p.potluck_id
  left join items i
    on i.item_id = pi.item_id
  left join users u
    on u.user_id = p.user_id
  left join users u2
    on u2.user_id = pi.user_id
  where p.potluck_id = 1;

  Shape desired:
  {
      potluck_id: 1,
    potluck_name: "John's Potluck",
    potluck_location: "John's House",
    potluck_time: '18:00:00',
    potluck_date: '2022-02-10',
    organizer: 'John',
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
  }
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
  getPotluckById,
  insertPotluck
}
