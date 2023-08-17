// !mengambil argument dari command line
const yargs = require("yargs")
const contacts = require('./contacts')
yargs.command({
    command : 'add',
    describe : 'menambahakan contact baru',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        },
        email: {
            describe: 'Email',
            demandOption:false,
            type: 'string'
        },
        noHP:{
            describe:'Nomor handphone',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
    contacts.simpanContact(argv.nama,argv.email,argv.noHP)
    }
}).demandCommand()
// menampilkan daftarsemua nama dan no hp
yargs.command(
    {
        command : 'list',
        describe: 'Menampilkan semua nama & no HP Contact',
        handler(){
            contacts.listContact()
        }
    }
)
// menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe : 'Menampilkan detail suatu kontak berdasarkan nama',
    builder:{
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        contacts.detailContact(argv.nama)
    }

})
// menghapus suatau kontak
yargs.command({
    command: 'delete',
    describe : 'Menghapus suatu kontak berdasarkan nama',
    builder:{
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        contacts.deleteContact(argv.nama)
    }

})
yargs.parse()