const cetakNama = require('./test/dua') //penangkapan dari file dua.js

require('./test/dua') // tidak bisa dijalankan
// console.log('helo wpu');
// cetakNama('ridwan') tidak bisa dijalankan karena beda modul
// bisa dijalankan setelah modul dua.js di exports 
console.log(cetakNama('ridwan'))