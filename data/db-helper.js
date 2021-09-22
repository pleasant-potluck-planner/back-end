const db = require('./db-config')

//USERS DB
function getUsers () {
    return db('users')
}

function getUserById (id) {
    return db('users').where({user_id: id}).first()
}

function getUserBy (username) {
    return db('users').where({user_name: username}).first()
}

async function insertUser (user) {
    const [newUser] = await db('users').insert(user, ['user_id', 'user_name'])
    return newUser
}


//POTLUCKS DB
function getPotlucks () {
    return db('potlucks')
}

function getPotluckById (id) {
    return db('potlucks').where({potluck_id: id}).first()
}

module.exports = {
    getUsers,
    getUserById,
    getUserBy,
    getPotlucks,
    getPotluckById,
    insertUser
}