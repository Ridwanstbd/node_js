const http = require('http')
const fs = require('fs')
const port = 3000
http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const url = req.url
    const renderHTML = (path,res)=>{
        fs.readFile(path, (err, data)=>{
            if(err){
                res.writeHead(404)
                res.write('File: not found')
            }else{
                res.write(data)
            }
            res.end()
        })
    }
    switch(url){
        case '/about':
            renderHTML('./about.html',res)
            break
        case '/contact':
            renderHTML('./contact.html',res)
            break
        default:
            renderHTML('./index.html',res)
            break
    }
    // if (url === '/about') {
    //     res.write('ini adalah halaman about')
    //     res.end()
    // } else if(url === '/contact'){
    //     res.write('ini adalah halaman contact')
    //     res.end()
    // }else{
    //     // res.write('hello world!!')
    //     // fs.readFile('./index.html', (err, data)=>{
    //     //     if(err){
    //     //         res.writeHead(404)
    //     //         res.write('File: not found')
    //     //     }else{
    //     //         res.write(data)
    //     //     }
    //     //     res.end()
    //     // })        
    // }
}).listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})