const router = require('express')
  .Router()
const Potluck = require('./model')

router.get('/:user_id', (req, res, next) => {
  res.json([
    {
      organizer: 'John',
      user_id: 1,
      potluck_id: 1,
      potluck_name: 'John\'s Potluck',
      potluck_location: 'John\'s House',
      potluck_time: '18:00:00',
      potluck_date: '2022-02-10',
      items: [
        {
          item_name: 'Chocolate Cake',
          guestBringingItem: 'John'
        }, {
          item_name: 'Red Wine',
          guestBringingItem: 'John'
        }
      ]
    }, {
      organizer: 'John',
      user_id: 1,
      potluck_id: 2,
      potluck_name: 'John\'s Potluck',
      potluck_location: '1234',
      potluck_time: '20:00:00',
      potluck_date: '2022-02-17',
      items: [
        {
          item_name: 'bread',
          guestBringingItem: 'foo'
        }, {
          item_name: 'olives',
          guestBringingItem: 'Joe'
        }
      ]
    }
  ])
})

router.get('/user_id/invited')

module.exports = router
