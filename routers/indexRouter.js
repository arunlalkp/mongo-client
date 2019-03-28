const express = require('express')
const db = require('../models/db')

router = express.Router();



router.get('/', (req, res) =>{
    res.send(index.html)
})

router.post('/adduser', (req, res)=> {
    console.log(req.body);
    //console.log(db.get());

    let Users = db.get().collection('users')

    Users.insertOne(req.body, (err, response)=> {
        if (err) {
            console.log(err);
        }
        let name = response.ops[0].name
        let email = response.ops[0].email
        res.send('Successfully Inserted ' + name + ' ' + email)
        
    })
})


module.exports = router;