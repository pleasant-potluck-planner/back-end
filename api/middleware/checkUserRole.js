const Helper = require('../../data/db-helper')
const Model = require('../potlucks/model')

function checkUserRole (req, res, next) {
    const { method, decodedToken }  = req
    const userId = decodedToken.subject
    const potluckId = req.params.potluck_id
    const potlucks = Model.getAllPotlucksForAUser(userId)
    const [potluck] = potlucks.filter(potluck => {
        potluck.potluck_id === potluckId
    })
    if(!potluck) return res.status(401).json({
        message: "Unauthorized"
    })
    if(potluck.guest && method === "DELETE") return res.status(401).json({
        message: "You must be the organizer to delete this potluck"
    })
    if(potluck.guest && method === "PUT" 
    &&  (req.body.potluck_date || req.body.time || req.body.potluck_name || req.body.potluck_location || item_name)) 
    return res.status(401).json({
        message: "You must be the organizer to delete this potluck"
    })
    if (potluck.potluck_date && method === "PUT" && req.body.guest)
    return res.status(401).json({
        message: "You cannot confirm another guest attendance"
    })
    next()
}

module.exports = checkUserRole