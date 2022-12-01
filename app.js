const express = require('express');
const app = express();
const port = 3000;

// menggunakan ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Amria Rendy',
            email: 'madarauchiha@ejs.co',
        },
        {
            nama: 'John',
            email: 'joni@ejs.co',
        },
        {
            nama: 'Tomcat',
            email: 'tomcat@ejs.co',
        }
    ]
    res.render('index', { name: 'amriarendy', title: 'Halaman Home', mahasiswa});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'Halaman About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Halaman Contact'});
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});