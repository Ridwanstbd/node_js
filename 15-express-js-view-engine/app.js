const express = require('express')
const app = express()
const port = 3000
// gunakan view engine
app.set('view engine','ejs')

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname})
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/products/:id', (req,res) => {
    res.send(`Product ID : ${req.params.id} <br> ID category : ${req.query.category}`)
})

app.use('/', (req,res)=>{
    res.status(404)
    res.send('route blank')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
