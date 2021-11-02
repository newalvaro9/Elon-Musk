const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require("path")

// Configure template Engine and Main Template File
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

//static
app.use(express.static(path.join(__dirname, 'public')));

// routes

app.get('/', (req, res) => {
    res.render('lobby/home');
});

app.get('/neuralink', (req, res) => {
    res.render('empresas/neuralink')
});

app.get('/spacex', (req, res) => {
    res.render('empresas/spacex')
});

app.get('/paypal', (req, res) => {
    res.render('empresas/paypal')
});

app.get('/theboringcompany', (req, res) => {
    res.render('empresas/theboringcompany')
});

 
// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
