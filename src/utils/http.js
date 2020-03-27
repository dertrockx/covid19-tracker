import axios from "axios";

export default axios.create({
    baseURL: 'https://coronavirus-ph-api.now.sh/',
    headers: {
        'Content-Type': 'application/json'
    }
})