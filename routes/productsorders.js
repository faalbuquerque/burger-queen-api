const router = require('express').Router();
const models = require('../models');

const User = models.Productsorders;

router.get('/', (req, resp)=>{ 
    User.finAll()
    .then(productsorders => console.log(productsorders))

    //res.send('Teste')
})

module.exports = router;