import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherDetails from './components/WeatherDetails';
import ForecastDisplay from './components/ForecastDisplay';
import { fetchForecast } from './services/apiService';
import './App.css';

const App = () => {
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (city) => {
        try {
            const data = await fetchForecast(city);
            setForecastData(data);
            setError('');
        } catch (err) {
            setError('City not found! Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Forecast</h1>
            <SearchBar onSearch={handleSearch} />
            {error && <p style={styles.error}>{error}</p>}
            {forecastData && (
              <>
                {/* <WeatherDisplay weather={forecastData} /> */}
                <ForecastDisplay forecast={forecastData.list} />
              </>
            )}
        </div>
    );
};

const styles = {
  container: {
      fontFamily: '"Roboto", sans-serif',
      textAlign: 'center',
      // background: 'linear-gradient(to bottom, #e0f7fa, #ffffff)',
      minHeight: '100vh',
      padding: '20px',
  },
  header: {
      color: '#2a5298',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
  },
  error: {
      color: '#d9534f',
      fontWeight: 'bold',
      margin: '10px 0',
  },
  details: {
      // backgroundColor: '#ffffff',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
      margin: '20px auto',
      maxWidth: '400px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
      marginTop: '15px',
      padding: '8px 12px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
  },
  backButtonHover: {
      backgroundColor: '#1e7d34',
  },
};


export default App;
