import React from "react";

const Form = (props) =>{
    return(
        <form >
            <input type={"text"} value={props.value} placeholder={"Wpisz miasto"}/>
            <button>Wyszukaj pogododę dla miasta </button>
        </form>
    )
};

export default Form
