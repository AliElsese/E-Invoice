const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path: './config.env'});
const dbConnection = require('./server/database/connection');
const authRoute = require('./server/routes/auth-route');
const userRoute = require('./server/routes/user-route');

// DB Connection
dbConnection();

// Express App
const app = express();

// Middlewares
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

// Routes
app.use('/auth' , authRoute)
app.use('/users' , userRoute);

const PORT = process.env.PORT || 8100;
app.listen(PORT , () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});