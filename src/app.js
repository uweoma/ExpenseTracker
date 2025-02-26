const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const sharedRoutes = require('../routes/v1/sharedRoutes')
const userRoutes = require('../routes/v1/userRoutes')
const categoryRoutes = require('../routes/v1/categoryRoutes')
const expenseRoutes = require('../routes/v1/expenseRoutes')

//loads the environmental variables from the .env file into your project.
dotenv.config();

const app = express();

//Middleware
const corsOption = {
    origin: 'https://greenmark.com',
    methods: ['GET, POST, PUT, DELETE'],
}

app.use(cors(corsOption))
app.use(express.json());

//Routes
app.use('/v1/shared', sharedRoutes);
app.use('/v1/users', userRoutes);
app.use('/v1/categories', categoryRoutes)
app.use('/v1/expenses', expenseRoutes)

module.exports = app;