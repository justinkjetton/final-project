import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY =  "751bbacb9e22b1852d7baaef0427451a"; 

class App extends React.Component {
 state = {
tempreture: undefined,
city: undefined,
country: undefined,
humidity: undefined,
description: undefined,
error: undefined
}

showWeather = async (e) => {
  e.preventDefault();

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=Imperial`);

  const data = await api_call.json();
  console.log(data);
  
  if (city && country){
   
    this.setState ({
  
      tempreture: data.list[0].main.temp,
      city: data.city.name,
      country: data.city.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
      error: ""
  
    });
  } else if (city||country) {

    this.setState({
      tempreture: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Error: Please input both City and Country!!"
    
    });
      } 
      else {

this.setState({
  tempreture: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: "Error: Please input a real City and Country!!"

});
  }
}

render() {

  return (

<div className = "boxer"> 

<div className ="wrapper">
<div className ="main">
<div className ="container">
<div className ="row">

<div className = ".col-xs-5 title-container">
<Titles/>
            </div>
            <div className = ".col-xs-7 form-container">
            <Form showWeather={this.showWeather}/>
            <Weather
            tempreture={this.state.tempreture}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />

            </div>
          </div>
      </div>
      </div>
  </div>
</div>

  );
}
};

export default App;
