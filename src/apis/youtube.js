import axios from 'axios';


const KEY ='AIzaSyD9Eoy6tBD4M24cbIbINGzppzyczipoDDQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});

