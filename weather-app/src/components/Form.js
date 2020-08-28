import React from "react";

const Form = (props) =>{

    const countries = require("i18n-iso-countries");
    countries.registerLocale(require("i18n-iso-countries/langs/pl.json"));
    const country = countries.getName(props.countryShort, "pl");
    let counryAndShortcut = country + " (" + props.countryShort+")";
    if(props.countryShort.length ===0){
        counryAndShortcut='';
    }
    

    return(
        <>
        <form className={"Form"} >
            {counryAndShortcut}
            <input
                type={"text"}
                value={props.value}
                placeholder={"Wpisz miasto"}
                onChange={props.change}
            />
            <img alt={"flaga"} className={"Flaga"} src={props.countryShort ? `https://www.countryflags.io/${props.countryShort}/shiny/64.png` : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" } />
        </form>

        </>

    )
};

export default Form
