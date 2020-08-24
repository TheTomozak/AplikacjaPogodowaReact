import React from "react";


const Result = (props) => {

    const {date, sunrise, sunset, temp, pressure, wind, cityName, err, timeZone} = props.weather;


    let contentForError= null;

    if(!err && cityName){
        const sunriseTime = new Date((sunrise + timeZone - 7200 )* 1000).toLocaleTimeString();
        const sunsetTime = new Date((sunset + timeZone - 7200 )* 1000).toLocaleTimeString();


        const currentTime = new Date().toLocaleTimeString();
        let wordToSunrise = null;
        if(sunriseTime < currentTime){
            wordToSunrise = 'był';
        }else {
            wordToSunrise='będzię'
        }
        let wordToSunset = null;
        if(sunsetTime < currentTime){
            wordToSunset = 'był';
        }else {
            wordToSunset='będzię'
        }


        contentForError = (
            <div>
                <h3>Wyszukiwanie dla miasta: <em>{cityName}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp}°C </h4>
                <h4>Wschód słońca dzisiaj {wordToSunrise} o godzinie: {sunriseTime} </h4>
                <h4>Zachód słońca dzisiaj {wordToSunset} o godzinie: {sunsetTime} </h4>
                <h4>Aktulana siła wiatru: {wind} m/s</h4>
                <h4>Aktulane ciśnienie: {pressure} hPa</h4>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="result">
                {err ? `Nie mamy w bazie miasta: ${cityName} 😔` : contentForError }
            </div>
        </React.Fragment>
    )
};

export default Result