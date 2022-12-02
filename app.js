const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

// menggunakan ejs
app.set('view engine', 'ejs');
// menggunakan express-ejs-layouts dan masukan attribute layout: 'dir/file'
app.use(expressLayouts);
// Built-in middleware
app.use(express.static('public'));

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
    res.render('index', { 
        layout: 'layouts/main',
        name: 'amriarendy', 
        title: 'Halaman Home', 
        mahasiswa});
});

app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main',
        title: 'Halaman About',
    });
});

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main',
        title: 'Halaman Contact',
        contacts,
    });
});

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);
    res.render('detail', {
        layout: 'layouts/main',
        title: 'Halaman Detail Contact',
        contact,
    });
});

app.use('/', (req, res) => {
    res.render('404', {
        layout: 'layouts/main',
        title: '404 Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});