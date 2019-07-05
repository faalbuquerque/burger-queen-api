const router = require('express').Router();
const models = require('../models');

const Products = models.Products;

router.get("/" , (req, res)=>{ Products.finAll()
    .then(products => {
        const productsList = products.map(products => products.dataValues)
        res.send(productsList)
    });
})

module.exports = router;