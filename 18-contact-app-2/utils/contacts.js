const fs = require('fs')
// membuat folder data jika belum ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}
// membuat file contacts json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath,'[]','utf-8')
}
// ambil semua data di contact.json
const loadContact = () => {
    const file =fs.readFileSync('data/contacts.json','utf-8')
    const contacts = JSON.parse(file)
    return contacts
}
// temukan data dari contact 
const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find((contact)=> contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}
//  menuliskan / menimpa data file contacts.json denagan data contact yang baru 
const saveContact = (contacts) =>{
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// tambah contact baru 
const addContact = (contact)=>{
    const contacts = loadContact()
    contacts.push(contact)
    saveContact(contacts)
}
//  cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact()
    return contacts.find((contact)=> contact.nama === nama)  
}
module.exports = { loadContact , findContact ,addContact,cekDuplikat }