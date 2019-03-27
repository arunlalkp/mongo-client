const express = require('express')

router = express.Router();






router.get('/', (req, res) =>{
    res.send('Index Router')
})

router.post('/', (req, res)=> {
    console.log(req.body);
    
    res.send(req.body)
})

module.exports = router;