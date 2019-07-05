const router = require('express').Router();
const models = require('../models');

const User = models.User;

router.get('/', (req, resp)=>{ 
    User.finAll()
    .then(user => console.log(user))
    //res.send('Teste')
    
})

module.exports = router;