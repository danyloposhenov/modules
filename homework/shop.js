let balance = 1000;
let beer = 100;
let wine = 50;
let pepsi = 80;

function addProduct() {
    if (checkBeer && beer >= amount) {
        balance += 50 * amount;
        beer -= amount;
        return beer
    }
    if (checkWine && wine >= amount) {
        balance += 50 * amount;
        wine -= amount;
        return wine
    }
    if (checkPepsi && pepsi >= amount) {
        balance += 50 * amount;
        pepsi -= amount;
        return pepsi
    }
    return false
}

export { balance, beer, wine, pepsi, addProduct };
import { amount, checkBeer, checkWine, checkPepsi } from "./script.js";
