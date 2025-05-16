import axios from 'axios';

const refs = {
    API_KEY: '50329765-c5f06c68786df4859fa5b0c64',
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