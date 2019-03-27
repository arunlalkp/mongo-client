const express = require('express');
const morgan = require('morgan')
const db = require('mongodb')

const app = express();

// Middleware for logged requests in console
app.use(morgan('tiny'))


app.use('/', require('./routers/indexRouter'))
app.use('/user', require('./routers/user'))







const port = process.env.PORT || 4500
app.listen(port, ()=>  console.log(`App Serving on port ${port}..`))