// ! deklarasi pemanggilan modul express yang telah diinstal sebelumnya dengan npm install express di terminal
const express = require('express')
// ! delklarasi pemanggilan modul ejs (embedded java script template layout)
const expressLayouts = require('express-ejs-layouts')
// ! deklarasi pemanggilan local modul contact dari folder utils atau termasuk utility 
const { loadContact , findContact } = require('./utils/contacts')
// ! variabel untuk memanggil fungsi express
const app = express()
// ! deklarasi port
const port = 3000
//! deklarasi pegunaan view engine (mesin penampil ejs)
app.set('view engine','ejs')
//! pemakaian my third party middlewire berupa express layout
app.use(expressLayouts)

//? application build in middlewire untuk membuka file yang secara default disembunyikan oleh express ke dalam web
app.use(express.static('public'))

// ! router berupa middlewire yang get maksudnya kita meraih kedalam protokol http setelah port
// ! pada parameter yang pertama diberikanlah subdomain 
// ! pada parameter kedua merupakan callback (fungsi didalam parameter) yang mengeluarkan fungsi lagi untuk merender web subdomain tersebut
app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname})
    //  ? simulasi pemanggilan data dari array dan ini arraynya
    const mahasiswa =[
        {
            nama: 'Ridwan Setio Budi',
            email: 'ridwansetiobudi@hotmail.com'
        },
        {
            nama: 'Anggar Prastiyo',
            email: 'anggarprastiyo@hotmail.com'
        },
        {
            nama: 'Rahmat Alamsyah',
            email: 'rahmatalamsyah@hotmail.com'
        },
    ]
    // ! render untuk merenderkan ke web
    // ! parameter pertama untuk nama yang mengarah ke index .ejs sebagai view engine 
    // ! parameter kedua merupakan objek yang akan di kelola didalam web
    res.render('index', 
    { 
        // ? property untuk di olah di tampilan web
        nama : "Ridwan Setio Budi Gesss", 
        title:"Homepage",
        // ! jika berupa array boleh juga ditulis nama arraynya saja 
        mahasiswa ,
        // ? property untuk memanggil main-layout dari folder layout
        layout : 'layouts/main-layout'
    })
})
// ! callback berparameter req maksudnya kita mengirim permintaan ke server
// ! callback berparameter res maksudnya server mengirim respons ke kita
app.get('/about', (req, res) => {
    res.render('about', 
    { 
        // ? berisi objek untuk memunculkan layout web tersebut
        layout : 'layouts/main-layout',
        title : "Aboutpage"
    })
})

app.get('/contact', (req, res) => {
    // ! mengimport fungsi dari contact.js
    const contacts = loadContact()
    // ! menampailkan ke web
    res.render('contact', 
    { 
        layout : 'layouts/main-layout',
        title : "Contactpage",
        // ! array yang di di dalan file contact.json
        contacts
    })
})
app.get('/contact/:id', (req, res) => {
    // ! kita meminta parameter id ke server dengan fungsi findcontact dari yang telah diekspor contacts.js 
    const contact = findContact(req.params.id)
    res.render('detail', 
    { 
        layout : 'layouts/main-layout',
        title : "Detail Contact",
        contact
    })
})

// ! penanganan ketika server gagal meminta atau permintaan di subdomain tidak valid dengan middlewire2 diatas
app.use((req,res)=>{
    res.status(404)
    res.send('route blank')
})
// ! server menderngar dan mengabarkan di terminal bahwa server telah berjalan di port yang telah ditentukan tanpa error atu gagal
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
