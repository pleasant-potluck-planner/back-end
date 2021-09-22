const router = require('express')
  .Router()

const Model = require('./model')
const {
  checkUsernameAndPassword,
  checkIfUsernameIsFree,
  checkUsernameLength,
  checkIfUserExists
} = require('./middlewares')
  
const bcrypt = require('bcryptjs')
const ROUNDS = process.env.ROUNDS || 8

router.post('/register', 
checkUsernameAndPassword, checkIfUsernameIsFree, checkUsernameLength,
 async (req, res, next) => {
   try{
    const { user_name, user_password } = req.body
    const hashedPassword = bcrypt.hashSync(user_password, parseInt(ROUNDS))
    const newUser = await Model.insert({user_name: user_name, user_password: hashedPassword})
    res.status(201).json(newUser)  
  } catch (err) {
    next(err)
  }
})

router.post('/login',checkUsernameAndPassword, checkIfUserExists, (req, res, next) => {
  const {user_name, user_password} = req.body
  if(bcrypt.compareSync(user_password, req.user.user_password)){
    const token = Model.tokenBuilder(req.user)
    res.json({
      message: "success",
      token
    })
  } else {
    next({
      status: 404,
      message: "invalid credentials"
    })
  }
  
  // const token = Model.tokenBuilder(newUser)

})


module.exports = router
