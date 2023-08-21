const validator = require('validator')
const chalk = require('chalk')
const pesan = chalk`Lorem {bgRed.black.strikethrough ipsum dolor sit} amet {bgGreen.black consectetur adipisicing elit.} Doloremque, impedit.` 
// console.log(validator.isEmail('ridwansetiobudi77@gmail.com'));
// console.log(validator.isMobilePhone('0821334442','id-ID'));
console.log(validator.isNumeric('0821334442'));
console.log(pesan);