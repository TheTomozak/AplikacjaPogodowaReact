import React from "react";


const Result = (props) => {

    const {date, sunrise, sunset, temp, pressure, wind, cityName, err} = props.weather;

    return (
        <React.Fragment>
            <div>
                Pogoda dla miasta: {cityName}
            </div>
        </React.Fragment>
    )
};

export default Result