 const express = require("express");
const app = express();
const path = require("path");

const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

// set the template engine as pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});


app.listen(port, () => {
    console.log(`the application successfully starting on port ${port}`);
});