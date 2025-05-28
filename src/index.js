
import { getExchangeRate } from './services/bcuService.js';

console.log("Monitor Econòmico Nacional iniciado.");

getExchangeRate().then(data => {
    console.log("Datos del BCU recibidos:");
    console.log(data);
});