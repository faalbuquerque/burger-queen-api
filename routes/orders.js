const router = require('express').Router();
const models = require('../models');

const User = models.Orders;

router.get('/', (req, resp)=>{ 
    User.finAll()
    .then(orders => console.log(orders))

    //res.send('Teste')
})

module.exports = router;