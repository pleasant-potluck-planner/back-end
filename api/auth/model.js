const Helper = require('../../data/db-helper')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

async function insert (user) {
    const res = await Helper.insertUser(user)
    return res
}

function tokenBuilder (user) {
    const payload = {
        subject: user.user_id,
        username: user.user_name
    }
    const options = {
        expiresIn: "1d"
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token
}

module.exports = {
    insert,
    tokenBuilder
}