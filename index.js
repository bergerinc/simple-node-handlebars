const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();


//middleware
app.use('/', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
}));


//routes
app.get('/', (req, res) => {
  res.render('home', {
    layout: 'default', 
    template: 'home-template', 
    title: 'Node, Express & Handlebars', 
    tagline: 'Learning Web Development', 
    blurb: `In cursus non neque et ornare. Duis blandit, felis nec vulputate porttitor, 
            tellus mauris pharetra nisi, et cursus magna ipsum ut mauris. Integer orci 
            tortor, faucibus a posuere maximus, rutrum vel velit. Mauris dignissim eu mi 
            molestie ornare. Cras non condimentum sapien. Integer eu interdum lacus, sit 
            amet ullamcorper augue. Vivamus sapien risus, egestas aliquam eleifend vitae, 
            auctor sit amet massa. Maecenas ac ultricies nulla.`
  });
});
app.get('/about', (req, res) => {
  res.render('about', {layout: 'default', template: 'about-template', title: 'About Us'});
});
app.get('/contact', (req, res) => {
  res.render('contact', {layout: 'default', template: 'contact-template', title: 'Contacts'});
});


//listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

