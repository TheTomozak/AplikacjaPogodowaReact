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
    ['mist', 'mgła'],
    ['thunderstorm with light rain', 'burza z lekkim deszczem'],
    ['thunderstorm with rain', 'burza z deszczem'],
    ['thunderstorm with heavy rain', 'burza z dużym deszczem'],
    ['light thunderstorm', 'lekka burza'],
    ['heavy thunderstorm', 'mocna burza'],
    ['ragged thunderstorm', 'burza'],
    ['thunderstorm with light drizzle', 'burza z lekką mżawką'],
    ['thunderstorm with drizzle', 'burza z mżawką'],
    ['thunderstorm with heavy drizzle', 'burza z mocną mżawką'],
    ['light intensity drizzle', 'intensywna mżawka'],
    ['drizzle', 'mżawka'],
    ['heavy intensity drizzle', 'intensywna mżawka'],
    ['light intensity drizzle rain', 'lekka mżawka z deszczem'],
    ['drizzle rain', 'mżawka z deszczem'],
    ['heavy intensity drizzle rain', 'mocna mżawka z deszczem'],
    ['shower rain and drizzle', 'mocna deszcz z mżawką'],
    ['heavy shower rain and drizzle', 'bardzo mocny deszcz z mżawką'],
    ['shower drizzle', 'mocniejsza mżawka'],
    ['light rain', 'lekki deszcz'],
    ['moderate rain', 'umiarkowane opady deszczu'],
    ['heavy intensity rain', 'intensywny deszcz'],
    ['very heavy rain', 'bardzo ulewny deszcz'],
    ['extreme rain', 'ekstremalny deszcz'],
    ['freezing rain', 'marznący deszcz'],
    ['light intensity shower rain', 'lekke nagłe opady deszczu'],
    ['shower rain', 'nagłe opady deszczu'],
    ['heavy intensity shower rain', 'mocne nagłe opady deszczu'],
    ['ragged shower rain', 'częściowe opady deszczu'],
    ['light snow', 'lekki opady śniegu'],
    ['Snow', 'opady śniegu'],
    ['Heavy snow', 'mocne opady śniegu'],
    ['Sleet', 'śnieg z deszczem'],
    ['Light shower sleet', 'lekkie nagłe opady śniegu'],
    ['Shower sleet', 'nagłe opady śniegu'],
    ['Light rain and snow', 'lekki deszcz i śnieg'],
    ['Rain and snow', 'deszcz i śnieg'],
    ['Light shower snow', 'lekki deszcz ze śniegiem'],
    ['Shower snow', 'deszcz ze śniegiem'],
    ['Heavy shower snow', 'mocne opady śniegu'],
    ['mist', 'zamglenie'],
    ['Smoke', 'smog'],
    ['Haze', 'mgła'],
    ['sand/ dust whirls', 'wiry piasku/pyłu'],
    ['fog', 'mgła'],
    ['sand', 'piasek'],
    ['dust', 'kurz'],
    ['volcanic ash', 'pył wulkaniczny'],
    ['squalls', 'szkwały'],
    ['tornado', 'tornado'],
    ['clear sky', 'czyste niebo'],
    ['few clouds: 11-25%', 'bardzo lekkie zachmurzenie około 11-25%'],
    ['scattered clouds: 25-50%', 'lekkie zachmurzenie około 25-50%'],
    ['broken clouds: 51-84%', 'zachmurzenie około 51-84%'],
    ['overcast clouds: 85-100%', 'mocne zachmurzenie około 85-100%'],





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
                <h4>Warunki pogodowe: {changeEnToPlDescriptionMap.has(descriptionWeather) ? changeEnToPlDescriptionMap.get(descriptionWeather) : descriptionWeather }</h4>
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