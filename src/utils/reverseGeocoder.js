import axios from 'axios';

const http = axios.create({
    baseURL: 'https://us1.locationiq.com/v1/',
})

export default async (searchString) => {
    const parsed_query = searchString.split(" ").join('%20')
    try {
        
        const prom =  http.get(`search.php?key=e4164fe93052eb&q=${parsed_query}&format=json`);
        return prom;
    } catch(err){
        return err;
    }
}