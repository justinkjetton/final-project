import React from "react";

const Weather = props => (

    <div className = "weather__info">
    {
        props.tempreture && <p className="weather__key"> Tempreture: 
       <span className="weather__value"> {props.tempreture} </span>
       °F</p>
        }
    {
        props.city && props.country && <p className="weather__key"> Location:
         <span className="weather__value"> {props.city}, {props.country} </span>
             </p>
        }
    {
        props.humidity && <p className="weather__key"> Humidity: 
        <span className="weather__value"> {props.humidity}</span>
        </p>
        }
    {
        props.description && <p className="weather__key">Conditions: 
        <span className="weather__value"> {props.description} </span>
         </p>
        }
    {
        props.error && <p>
             <span className="weather__error"> {props.error} </span>
             </p>
        }
    </div>


);

export default Weather;