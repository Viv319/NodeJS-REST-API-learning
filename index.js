const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/users.js')

const app = express()

app.use(bodyParser.urlencoded())
app.use(userRoutes)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Our first Node Express Server :)')
})

const port =process.env.PORT || 3000;

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Server is up :)'))
    .catch((error) => console.log(error))
})

















/*
  - Database (DB): Permanent Storage
      - Two types:
          - 1. SQL (Relational DB)
              - Table and Row format
              - Eg: MySQL, PostgreSQL, SQLite, etc
          - 2. NoSQL (Non-Relational DB)
              - Collection and Document format
              - Eg: MongoDB, AWS DynamoDB, etc

  - MongoDB
  - Mongoose: MongoDB Driver/ ODM (Object Data Modelling)
  - Schema/Models

  REST APIs: Representational State Transfer
  CRUD Opeartions:
    - GET (Read)
    - POST (Create)
    - PUT/PATCH (Update)
    - DELETE (Delete)

  E-Commerce:
  - Customers
      - GET /customers (Read)
      - POST /customers (Create)
      - PATCH /customers/:id (Update)
      - DELETE /customers/:id (Delete)

  - Sellers
      - GET /sellers (Read)
      - POST /sellers (Create)
      - PATCH /sellers/:id (Update)
      - DELETE /sellers/:id (Delete)

  SEARCH /users (READ - with query parameters)
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find(req.query)
      res.json({
        status: 'SUCCESS',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        status: 'FAILED',
        message: 'Something went wrong'
      })
    }
  })

*/