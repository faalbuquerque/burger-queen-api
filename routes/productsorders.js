const router = require('express').Router();
const models = require('../models');

const Productsorders = models.Productsorders;

router.get("/" , (req, res)=>{ Productsorders.finAll()
    .then(productsorders=> {
        const productsordersList = user.map(productsorders => productsorders.dataValues)
        res.send(productsordersList)
    });
})


module.exports = router;