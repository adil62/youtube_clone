import axios from 'axios'

const apiKey = 'AIzaSyDuCwfv83VKgg4iDP8CLdCfnRWT9MxVg4Y'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  timeout: 10000 
});