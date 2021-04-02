import axios from 'axios';
import md5 from 'md5';

export const API_BASE_URL = 'http://gateway.marvel.com/v1/public'
export const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const ts = new Date().getTime();
const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  method: "get",
  params: {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash
  }
});