import axios from 'axios'

export const MedAPIurl = axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})

