const contacts= require('./contacts.js')
const main =async () =>{
    const nama = await contacts.tulisPertanyaan('masukkan nama anda : ')
    const email = await contacts.tulisPertanyaan('masukana email anda : ')
    const noHp = await contacts.tulisPertanyaan('masukan nomor hp anda : ')
    contacts.simpanContact(nama,email,noHp)
}
main()