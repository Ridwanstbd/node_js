// core modules
//! file system
const fs = require('fs')
// // console.log(fs);
// //  menuliskan string ke file syncrhonous
// try {
//     fs.writeFileSync('data/test.txt','hello world secara syncrhonous !')
// } catch (error) {
//     console.log(error);
// } 

//?  asynchonous
// fs.writeFile('data/test2.txt','hello world secara asynchronous', (e)=> {
//     console.log(e);
// })

// ? membaca isi file
// const data = fs.readFileSync('data/test.txt','utf-8')

// console.log(data);
//? asynchronous
// const data = fs.readFile('data/test2.txt','utf-8', (e,data)=> {
//     if(e)throw e
//     console.log(data)
// })

// ! readline
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('masukkan nama anda : ',(nama)=>{
    rl.question('masukan no hp anda : ',(noHp)=>{
        const contact = {nama,noHp}
        const file =fs.readFileSync('data/contacts.json','utf-8')
        const contacts = JSON.parse(file)
        contacts.push(contact)

        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
        console.log('terimaksih telah mengisi data');
        rl.close()
    })
})