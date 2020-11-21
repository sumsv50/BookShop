const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname,'public')));

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//ROUTER INIT
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})