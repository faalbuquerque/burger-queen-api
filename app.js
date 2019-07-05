const express = require("express");
const app = express();
const db = require('./models/index');

app.listen(4568, console.log("rodando"))

app.use('/user', require('./routes/user'))
app.use('/user', require('./routes/orders'))
app.use('/user', require('./routes/products'))
app.use('/user', require('./routes/productsorders'))


db.sequelize.sync();