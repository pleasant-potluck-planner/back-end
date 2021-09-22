const router = require('express')
  .Router()
const Potluck = require('./model')

router.get('/:potluck_id', (req, res, next) => {
  res.json({
    potluck_id: 1,
    potluck_name: 'John\'s Potluck',
    potluck_location: 'John\'s House',
    potluck_time: '18:00:00',
    potluck_date: '2022-02-10',
    organizer: 'John',
    items: [
      {
        item_name: 'Chocolate Cake',
        guestBringingItem: 'John'
      }, {
        item_name: 'Red Wine',
        guestBringingItem: 'John'
      }
    ]
  })
})

router.get

module.exports = router
