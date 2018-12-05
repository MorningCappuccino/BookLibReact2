import axio from 'axios';

export const axios = axio.create({
    baseURL: 'http://localhost:3000'
});