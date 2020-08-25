import React from "react";
import './Result.css';


const changeEnToPlDescriptionMap = new Map([
    ['clear sky', 'czyste niebo'],
    ['few clouds', 'pojedyńcze chmury na niebie'],
    ['scattered clouds', 'małe zachmurzenia'],
    ['broken clouds', 'zachmurzenie częściowe'],
    ['shower rain', 'lekkie opady deszczu'],
    ['rain', 'opady deeszczu'],
    ['thunderstorm', 'burza'],
    ['snow', 'śnieg'],
    ['mist', 'mgła']
]);

const Result = (props) => {

    const {date, sunrise, sunset, temp, pressure, wind, cityName, err, timeZone, descriptionWeather, iconWeather} = props.weather;


    let contentForError = null;

    if (!err && cityName) {
        const sunriseTime = new Date((sunrise + timeZone - 7200) * 1000).toLocaleTimeString();
        const sunsetTime = new Date((sunset + timeZone - 7200) * 1000).toLocaleTimeString();


        const currentTime = new Date().toLocaleTimeString();
        let wordToSunrise = null;
        if (sunriseTime < currentTime) {
            wordToSunrise = 'był';
        } else {
            wordToSunrise = 'będzię'
        }
        let wordToSunset = null;
        if (sunsetTime < currentTime) {
            wordToSunset = 'był';
        } else {
            wordToSunset = 'będzię'
        }

        contentForError = (
            <>
                <h3>Wyszukiwanie dla miasta: <em>{cityName.charAt(0).toUpperCase()+cityName.slice(1)}</em></h3>
                <img  src={`http://openweathermap.org/img/wn/${iconWeather}@2x.png`} alt={"Obrazek pogody"}/>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp}°C </h4>
                <h4> Warunki pogodowe: {changeEnToPlDescriptionMap.has(descriptionWeather) ? changeEnToPlDescriptionMap.get(descriptionWeather) : descriptionWeather }</h4>
                <h4>Wschód słońca dzisiaj {wordToSunrise} o godzinie: {sunriseTime} </h4>
                <h4>Zachód słońca dzisiaj {wordToSunset} o godzinie: {sunsetTime} </h4>
                <h4>Aktulana siła wiatru: {wind} m/s</h4>
                <h4>Aktulane ciśnienie: {pressure} hPa</h4>
            </>
        )
    }

    return (
        <React.Fragment>
            <div className="result">
                {err ? `Nie mamy w bazie miasta: ${cityName} 😔` : contentForError}
            </div>
        </React.Fragment>
    )
};

export default Result