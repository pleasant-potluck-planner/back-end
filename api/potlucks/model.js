const db = require('../../data/db-config')

const getPotluckById = potluck_id => {
  return db('potlucks')
    .where('potluck_id', potluck_id)
}

const getPotlucksByOrganizer = user_id => {
  // todo - need to pull item data and hammer into desired shape
  const dataGlob = db('potlucks as p')
    .leftJoin(function () {
      this.select('u.user_id', 'u.user_name')
        .from('users as u')
        .as('u')
    }, {'u.user_id': 'p.user_id'})
    .where('p.user_id', user_id)

  return dataGlob

/*
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
  getPotluckById,
  getPotlucksByOrganizer,
  getPotlucksIfInvited,
  insertPotluck
}
