const router = require('express')
  .Router()
const Potluck = require('./model')
const restricted = require('../middleware/restricted')

router.get('/:potluck_id', (req, res, next) => {
  Potluck.getPotluckById(req.params.potluck_id)
    .then(potluck => res.json(potluck))
    .catch(next)
})

router.get('/user/:user_id', (req, res, next) => {
  // Potluck.getPotlucksByOrganizer(req.params.user_id)
  //   .then(data => res.json(data))
  //   .catch(next)
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

router.post('/', (req, res, next) => {
  let temp = 10
  res.status(201)
    .json({
      potluck_id: temp++,
      potluck_name: req.body.potluck_name || undefined,
      potluck_date: req.body.potluck_date || undefined,
      potluck_time: req.body.potluck_time || undefined,
      potluck_location: req.body.potluck_location || undefined
    })
})

router.put('/:potluck_id', (req, res, next) => {
  res.json({
    potluck_id: req.params.potluck_id,
    potluck_name: req.body.potluck_name || undefined,
    potluck_date: req.body.potluck_date || undefined,
    potluck_time: req.body.potluck_time || undefined,
    potluck_location: req.body.potluck_location || undefined
  })
})

router.delete('/:potluck_id', (req, res, next) => {
  res.status(200)
    .json({message: `potluck with id ${req.params.potluck_id} successfully deleted`})
})

router.delete('/:potluck_id/items/:item_id', (req, res, next) => {
  res.status(200)
    .json({message: `item with id ${req.params.item_id} has been removed from potluck with id ${req.params.potluck_id}`})
})

module.exports = router
