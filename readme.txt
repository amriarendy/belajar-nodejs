nodejs v16.16.0
npm v8.11.0

exspress@4.17.1
nodemon
ejs@3.1.6
express-ejs-layouts@2.5.0 https://www.npmjs.com/package/express-ejs-layouts 

How to start
start in terminal > nodemon app
in browser url > http://localhost:3000

view engine
memungkinkan untuk membuat file tempate statis untuk aplikasi
engine untuk mengganti variable di template dengan nilai sebenarnya, dan menampilkan dalam bentuk html
ada banyak view templating engine seperti contoh Pug, Hami, Eta Ejs dan React. namun untuk file ini menggunakan EJS https://ejs.co/

express-ejs-layouts
sebuah sistem layout dari ejs biar 1 main template
const expressLayouts = require('express-ejs-layouts');
// menggunakan express-ejs-layouts dan masukan attribute layout: 'dir/file'
app.use(expressLayouts);