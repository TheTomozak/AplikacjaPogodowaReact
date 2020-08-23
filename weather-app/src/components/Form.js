import React from "react";

const Form = (props) =>{
    return(
        <form onSubmit={props.submit} >
            <input
                type={"text"}
                value={props.value}
                placeholder={"Wpisz miasto"}
                onChange={props.change}
            />
            <button>Wyszukaj pogododę dla miasta </button>
        </form>
    )
};

export default Form
