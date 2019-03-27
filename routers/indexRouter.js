const express = require('express')

router = express.Router();



router.get('/', (req, res) =>{
    res.send(index.html)
})

router.post('/adduser', (req, res)=> {
    res.send(req.body)
    console.log(req.body);
    })


module.exports = router;