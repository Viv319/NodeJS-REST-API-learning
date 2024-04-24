const express = require('express')
const ejs = require('ejs');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./controllers/models/routes/users.js')



const app = express();
const bodyParser = require('body-parser')

// it is related with line 7  const userRoutes = require('./routes/users.js')
app.use(userRoutes)


app.set('view engine', 'ejs')

// urlencoded middle ware take all values comes from html form and then encode it so database can understand
app.use(bodyParser.urlencoded())


app.get('/',(req,res)=>{
    res.send('hello welcome')
})



app.listen(process.env.PORT,()=>{
    console.log('server is up at 3000');
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log('database is connected'))
    .catch((err)=> console.log(err))
})

