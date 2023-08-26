import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://cryptotracker-872g.onrender.com/api'
    });
}
