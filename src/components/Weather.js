import { useState, useEffect } from 'react';

const Weather = props => {
    const [apiData, setApiData] = useState({});

    // API KEY AND URL
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=piedmont&appid=${apiKey}`;

    useEffect(() => {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);

    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };
    return (
        <div className="weather">
            <div className="weatherContainer">
                <div className="container">
                    <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
                    {apiData.main ? (
                        <div class="card-body text-center">
                            <img
                                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                alt="weather status icon"
                                className="weather-icon"
                            />

                            <p className="h2">
                                {kelvinToFarenheit(apiData.main.temp)}&deg; C
                            </p>

                            <p className="h5">
                                <i className="fas fa-map-marker-alt"></i>{' '}
                                <strong>{apiData.name}</strong>
                            </p>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                <p>
                                    <i class="fas fa-temperature-low "></i>{' '}
                                    <strong>
                                    {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                                    </strong>
                                </p>
                                <p>
                                    <i className="fas fa-temperature-high"></i>{' '}
                                    <strong>
                                    {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                                    </strong>
                                </p>
                                </div>
                                <div className="col-md-6">
                                <p>
                                    {' '}
                                    <strong>{apiData.weather[0].main}</strong>
                                </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1>Loading</h1>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;