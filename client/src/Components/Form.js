import React from "react";

    
const Form = props => (
       
    
    <form onSubmit={props.showWeather}>
           <input type= "text" name= "city" placeholder= "City..."/>
           <input type= "text" name= "country" placeholder= "Country..."/>
           <button id ="show_weather"> Show Weather </button>

    </form>
);
export default Form;