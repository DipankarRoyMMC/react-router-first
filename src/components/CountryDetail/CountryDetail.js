import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    return (
        <div>
            <h1>Country Details Component.</h1>
            <h2>country is: {countryName}</h2>
        </div>
    );
};

export default CountryDetail;