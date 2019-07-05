const router = require('express').Router();
const models = require('../models');

const User = models.User;

router.get("/" , (req, res)=>{ User.finAll()
    .then(user=> {
        const userList = user.map(user => user.dataValues)
        res.send(userList)
    });
})

module.exports = router;