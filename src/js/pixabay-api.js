import axios from 'axios';

const refs = {
    API_KEY: import.meta.env.VITE_API_KEY,
    BASE_URL: 'https://pixabay.com/api/',
} 

export async function getImagesByQuery(query){

    const params = {
        key: refs.API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    
    const response = await axios.get(refs.BASE_URL, { params });
    return response.data; 
}