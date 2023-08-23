const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000
// gunakan view engine
app.set('view engine','ejs')
// my third party middlewire
app.use(expressLayouts)
app.use(morgan('dev'))

// application build in middlewire
app.use(express.static('public'))

// application level middleware
app.use((req,res,next) => {
    console.log('time :', Date.now());
    next()
})

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
    res.render('contact', 
    { 
        layout : 'layouts/main-layout',
        title : "Contactpage"
    })
})

app.get('/products/:id', (req,res) => {
    res.send(`Product ID : ${req.params.id} <br> ID category : ${req.query.category}`)
})

app.use((req,res)=>{
    res.status(404)
    res.send('route blank')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
