// import modul es 6
import coffeStock from "./coffeStock.js";

const displayStock = stock => {
    for (const type in stock) {
      console.log(type);
    }
  }
   
  displayStock(coffeStock);