const jwt = require('jsonwebtoken')
const Helper = require('../../data/db-helper')

//check if the user provided a username and a password
function checkUsernameAndPassword (req, res, next) {
    if(!req.body.user_name || !req.body.user_password){
        next({
            status: 404,
            message: "Missing username or password"
        })
    } else {
        next()
    }
}

//check if the username is available
async function checkIfUsernameIsFree (req, res, next) {
    const user =  await Helper.getUserBy(req.body.user_name)
    if(user){
        next({
            status: 401,
            message: "Username already taken"
        })
    } else {
        next()
    }
}

//check that the username is at least 3 characters long
function checkUsernameLength (req, res, next) {
    if(req.body.user_name.length < 3){
        next({
            status: 401,
            message: "Username must be at least 3 characters long"
        })
    } else {
        next()
    }
}

async function checkIfUserExists (req, res, next) {
    const user = await Helper.getUserBy(req.body.user_name)
    if (user){
        req.user = user
        next()
    } else {
        next({
            status: 401,
            message: 'invalid credentials'
        })
    }
}

module.exports = {
    checkUsernameAndPassword,
    checkIfUsernameIsFree,
    checkUsernameLength,
    checkIfUserExists
}
