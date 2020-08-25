import React from "react";

const Form = (props) =>{
    return(
        <>
        <form className={"Form"} >
            {props.countryShort}
            <input
                type={"text"}
                value={props.value}
                placeholder={"Wpisz miasto"}
                onChange={props.change}
            />
            <img alt={null} className={"Flaga"} src={props.countryShort ? `https://www.countryflags.io/${props.countryShort}/shiny/64.png` : "" } />
        </form>

        </>

    )
};

export default Form
