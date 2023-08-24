const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadContact , findContact } = require('./utils/contacts')


const app = express()
const port = 3000
// gunakan view engine
app.set('view engine','ejs')
// my third party middlewire
app.use(expressLayouts)

// application build in middlewire
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname})
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
    res.render('index', 
    { 
        nama : "Ridwan Setio Budi Gesss", 
        title:"Homepage", mahasiswa ,
        layout : 'layouts/main-layout'
    })
})

app.get('/about', (req, res) => {
    res.render('about', 
    { 
        layout : 'layouts/main-layout',
        title : "Aboutpage"
    })
})

app.get('/contact', (req, res) => {
    const contacts = loadContact()
    res.render('contact', 
    { 
        layout : 'layouts/main-layout',
        title : "Contactpage",
        contacts
    })
})
app.get('/contact/:id', (req, res) => {
    const contact = findContact(req.params.id)
    res.render('detail', 
    { 
        layout : 'layouts/main-layout',
        title : "Detail Contact",
        contact
    })
})


app.use((req,res)=>{
    res.status(404)
    res.send('route blank')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
