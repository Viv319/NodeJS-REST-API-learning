const express = require('express')

const { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser 
} = require('../controllers/users.js')

const router = express.Router()

router.get('/users', getUsers)

router.post('/users', createUser)

router.patch('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router