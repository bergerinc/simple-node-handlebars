const express = require('express');
const routes = express.Router();

// home/default route
routes.get('/', (req, res) => {
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

//about us 
routes.get('/about', (req, res) => {
  res.render('about', {layout: 'default', template: 'about-template', title: 'About Us'});
});

//contact
routes.get('/contact', (req, res) => {
  res.render('contact', {layout: 'default', template: 'contact-template', title: 'Contacts'});
});

module.exports = routes;