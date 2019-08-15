import axios from 'axios';
const KEY = 'AIzaSyBzObTYDPPIr0xNzU5FkMwwvJ8YVpT3w9Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
// key Original del proyecto: AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I