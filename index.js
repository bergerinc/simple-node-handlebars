const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const routes = require('./src/routes/routes');


//middleware 
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
}));


//routes 
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', routes);


//listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

