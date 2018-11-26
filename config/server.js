let express = require('express');
let consign = require('consign');
let bodyParse = require('body-parser');
let expressValidator = require('express-validator');

//iniciando express()
let app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParse.urlencoded({extended: true}));
app.use(expressValidator());

consign().include('./app/routers')
.then('./app/models')
.then('./app/controllers')
.into(app);

module.exports = app;