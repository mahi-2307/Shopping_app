import axios from "axios"

export const shoppingOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd454855a0cmsh3066ade5dd62f58p13afb1jsn9778ef28edf7',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
}

export const fetchData = async (url,options) =>{
    const response = axios.get(url,options);
    return await response;
}