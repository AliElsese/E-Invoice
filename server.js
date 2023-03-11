const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config({path: './config.env'});
const dbConnection = require('./server/database/connection');

const ApiError = require('./server/utils/apiError');
const errorMiddleware = require('./server/middlewares/error-middleware');
const headersMiddleware = require('./server/middlewares/headers-middleware');

const authRoute = require('./server/routes/auth-route');
const userRoute = require('./server/routes/user-route');

// DB Connection
dbConnection();

// Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(headersMiddleware.setHeaders);
app.use(cors());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

// Routes
app.use('/auth' , authRoute);
app.use('/users' , userRoute);

app.all('*' , (req , res , next) => {
    next(new ApiError(`Can't Find This Route: ${req.originalUrl}` , 400));
})

app.use(errorMiddleware);

const PORT = process.env.PORT || 8100;
app.listen(PORT , () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});