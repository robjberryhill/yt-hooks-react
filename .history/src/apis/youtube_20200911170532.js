import axios from 'axios';

const KEY = 'AIzaSyAQf_c6-zzUf6L9em9h31knlR8p1OlWWXY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

