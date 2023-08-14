//? const fs = require('fs')
// diatas ini adlah mengimport core module
// ? const cetakNama = require('./test/dua') //penangkapan dari file dua.js
// diatas ini mengimport local module
// ? const moment = require('moment')
// di atas ini mengimport dari third party / npm module / node_modules
// ? require('./test/dua') // tidak bisa dijalankan
// console.log('helo wpu');
// cetakNama('ridwan') tidak bisa dijalankan karena beda modul
// bisa dijalankan setelah modul dua.js di exports 
// console.log(cetakNama('ridwan'))

const dua = require('./test/dua') // pemangillan dari dua.js untuk mengambil semua yang di export disana dengan mengeluarkan berupa object
// console.log(dua); 
//  dibawah ini cara penggunaan modulnya
console.log(
    dua.cetakNama('ridwan'),
    dua.PI, 
    dua.mahasiswa.cetakMhs(), 
    new dua.Orang()
);