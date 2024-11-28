import React from 'react';

const WeatherDisplay = ({ city }) => {
    if (!city) return null;

    return (
        <div style={styles.container}>
            <h2>{city.name}, {city.country}</h2>
            <p>Coordinates: {city.coord.lat}, {city.coord.lon}</p>
            <p>Population: {city.population}</p>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#e0f7fa',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        marginTop: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
};

export default WeatherDisplay;
