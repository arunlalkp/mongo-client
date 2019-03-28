const express = require('express');
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const db = require('./models/db')

db.connect('mongodb://localhost:27017', (err)=> {
    if (err) {
        console.log(err);
        process.exit(1)
    }
    console.log('MonngoDB Connected');
})


const app = express();

// Middleware for logged requests in console
app.use(morgan('tiny'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routers/indexRouter'))
app.use('/user', require('./routers/userRouter'))







const port = process.env.PORT || 4500
app.listen(port, ()=>  console.log(`App Serving on port ${port}..`))