const router = require('express').Router();
const models = require('../models');

const User = models.Products;

router.get('/', (req, resp)=>{ 
    User.finAll()
    .then(products => console.log(products))

    //res.send('Teste')
})

module.exports = router;