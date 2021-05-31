import axios from 'axios';
import { main } from './constants'

const instance = axios.create({
    baseURL: main.base,
});

export default instance;