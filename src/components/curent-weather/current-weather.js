import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top-weather">
                <p className="city"> Castrignano </p>
                <p className="actual"> Sunny </p>
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png" />
        </div>
    )
}

export default CurrentWeather