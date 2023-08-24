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
const findContact = (id) => {
    const contacts = loadContact()
    const contact = contacts.find((contact)=> contact.id === id)
    return contact
}
module.exports = { loadContact , findContact }