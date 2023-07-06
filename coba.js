//! Synchronous

// const getUserSync = (id) => {
//     const nama = id === 1? 'ridwan': 'budi'
//     return {id,nama}
// }

// const userSatu = getUserSync(1);
// console.log(userSatu)

// const userDua = getUserSync(2);
// console.log(userDua)

// const halo = 'Hello World'
// console.log(halo)

//! Asynchronous
const getUserSync = (id, callback) => {
    const time = id === 1 ? 7000:2000
    setTimeout(()=> {
    const nama = id === 1 ? 'Ridwan':'Budi'
    callback({id,nama})
    },time)
}

const userSatu = getUserSync(1,(result)=>{
    console.log(result)
})

const userDua = getUserSync(2,(result)=>{
    console.log(result)
})

const halo = 'Hello World'
console.log(halo)