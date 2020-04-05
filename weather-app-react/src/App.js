import React from "react";


import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import 'weather-icons/css/weather-icons.css';
import "./App.css";

import snow from '../../weather-app/src/img/snow.jpeg';
import rain from '../../weather-app/src/img/rain.jpeg';
import clear from '../../weather-app/src/img/clear.jpeg'
import clouds from '../../weather-app/src/img/clouds.jpeg';
import lightningStorm from '../../weather-app/src/img/lightning-storm.jpeg';



const API_KEY = "8799aa63d5eda23b447968f738bd4c70";


class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    logo: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    backgroundImage: {backgroundImage: undefined }
    }

  weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }

  

  bgImage = [
    "",
    snow,
    rain,
    clear,
    clouds,
    lightningStorm
  ]

  

  weatherLogo = {
    rainy: this.bgImage[2],
    cloudy: this.bgImage[4],
    clear: this.bgImage[3],
    lightning: this.bgImage[5],
    snow: this.bgImage[1]
  }

  

 
  getWeatherIcon(icon, rangeID){
    switch(true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm},
                      {logo:this.weatherLogo.lightning});

        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({icon: this.weatherIcon.Drizzle});
        this.setState({logo: this.weatherLogo.cloudy});
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.weatherIcon.Rain});
        this.setState({ logo: this.weatherLogo.rainy});
        
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({icon: this.weatherIcon.Snow});
        break;    
      case rangeID >= 701 && rangeID <= 781: 
        this.setState({icon: this.weatherIcon.Atmosphere});
        break;
      case rangeID === 800:
        this.setState({icon: this.weatherIcon.Clear});
        
        break;  
      case rangeID >= 801 && rangeID <= 804:
        this.setState({icon: this.weatherIcon.Clouds});
        // this.setState({logo: this.weatherLogo.cloudy});
        // document.this.setState.backgroundImage = this.bgImage[4];
        this.setState({backgroundStyle: 
          {backgroundImage: this.bgImage[4]} });
        break;
      default:
        this.setState({icon:this.weatherIcon.Clear});
    }
  }
  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);

    const data = await api_call.json();
    
    if(true) {
      
    
      if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: ""
        
      });
      this.getWeatherIcon(this.weatherIcon, data.weather[0].id);

      } else if (city===0 && country===0){
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Please enter the values."
        });
      }
      else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Please enter the values."
        });
      }
    }
      console.log(data);
  }
  


  render() {
    return (
      <div>
        <div className="wrapper">
          
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 title-container ">
                  <Titles weatherIcon={this.state.icon}
                    // sunrise={this.state.sunrise}
                    // sunset={this.state.sunset}
                  />
                  
                </div>
                <div className="col-xs-6 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
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
}

        

export default App;