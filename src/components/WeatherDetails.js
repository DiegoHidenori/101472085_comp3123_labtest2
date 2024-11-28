import React from 'react';

const WeatherDetails = ({ weather }) => {
    if (!weather) return null;

    const {
        main: { pressure },
        sys: { sunrise, sunset },
    } = weather;

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div style={styles.container}>
            <h3>Additional Details</h3>
            <p>Pressure: {pressure} hPa</p>
            <p>Sunrise: {formatTime(sunrise)}</p>
            <p>Sunset: {formatTime(sunset)}</p>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '10px',
        textAlign: 'center',
        marginTop: '20px',
        display: 'inline-block',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
};

export default WeatherDetails;
