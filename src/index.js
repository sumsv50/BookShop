const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 4000;

const route = require('./routes');

//Config and connect to MongoDB
const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname,'public')));

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//ROUTER INIT
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})