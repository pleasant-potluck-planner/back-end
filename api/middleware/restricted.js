const jwt = require('jsonwebtoken')

const restricted = (req, res, next) => {
  const token = req.headers.authorization
  jwt.verify(token,
    process.env.JWT_SECRET || 'when you\'re fast asleep',
    (err, decoded) => {
      if (err) {
        res.redirect(300, '/api/auth/login')
      } else {
        req.decodedToken = decoded
        next()
      }
    }
  )
}

module.exports = restricted
