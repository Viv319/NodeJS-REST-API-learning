const express = require('express')

const {getUsers, 
    createUser, 
    updateUsers, 
    deleteUsers } 
    = require('../../users.js')

    const router= express.Router()

    router.get('/users', getUsers)

    router.post('/users', function(req,res){
        createUser
    })

    router.patch('/users/:id', updateUsers)

    router.delete('/users/:id', deleteUsers)

module.exports = router