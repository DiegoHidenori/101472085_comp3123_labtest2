import axios from 'axios';

const API_KEY = '86108740093f47f614d9fe89af205bbb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchForecast = async (city) => {
    const response = await axios.get(BASE_URL, {
        params: {
            q: city,
            units: 'metric',
            appid: API_KEY,
        },
    });
    return response.data;
};
