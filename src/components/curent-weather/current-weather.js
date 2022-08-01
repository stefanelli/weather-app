import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top-weather">
                <div>
                    <p className="city"> Castrignano </p>
                    <p className="actual"> Sunny </p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom-weather">
                <p className="temperature">35</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Temperature</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">40</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">40%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">40pc</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather