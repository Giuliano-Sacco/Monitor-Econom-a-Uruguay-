import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BCU_BASE_URL;

export async function getExchangeRate() {
    try {
        const response = await axios.get(`${BASE_URL}estadisticas/series/api/11.1`);
        return response.data;

    } catch (error) {
        console.error("Error al obtener datos del BCU:", error.message);
        return null;
    }
}