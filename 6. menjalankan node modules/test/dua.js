function cetakNama(nama){
    return `halo, nama saya ${nama}`
}
const PI = 3.14

const mahasiswa = {
    nama:'ridwan setio budi',
    umur : 22,
    cetakMhs(){
        return `halo nama saya ${this.nama} umur saya ${this.umur} tahun`
    }
}

// aturan penulisan class harus capital
class Orang {
    constructor(){
        console.log('objek orang telah dibuat!');
    }
}
//? module.exports = cetakNama
// kalian tidak bisa langsung mengexport seperti diatas untuk PI
// maka harus seperti dibawah ini
// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang = Orang
// ? export bisa dibuat objek
// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa: mahasiswa,
//     Orang : Orang
// }
// ? atau bisa supaya ringkas
module.exports = {cetakNama,PI,mahasiswa,Orang}