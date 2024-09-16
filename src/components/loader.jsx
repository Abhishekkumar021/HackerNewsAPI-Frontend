// Loader.js
import React from 'react';
import '../styles/loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
