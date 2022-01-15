import './App.css';
import Form from './Form';
import Result from './Result';
import React, { Component} from 'react';



class App extends Component { 
  state = { 
    value: "",
    date: "",
    city: "",
    sunrise:  "",
    sunset: "", 
    pressure: "",
    wind: "",
    err: false,


  }
handleInputChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

handleCitySubmit = (e) => {
  e.preventDefault()
  console.log('potiwierdzony formularz')
  const API = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.value+"&APPID=b55b24264dd42ea88463551cd3042b89&units=metric";
  
  fetch(API) 
  .then(response => { 
    if (response.ok) { 
      return response
    } 
    throw Error("Nie udało się")
  })
  .then(response => response.json())
  .then(data => {
    const time = new Date().toLocaleString()
    this.setState({
      date: time,
      city:this.state.value,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset, 
      temp: data.main.temp,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      err: false,
    })
  })
  .catch(err => {
    console.log(err);
    this.setState( prevState => ({
      err: true,
      city: prevState.value 
    })) 
  })
}
  

  render() {
    return  (
    <div className="App">
     <Form 
     value={this.state.value} 
     change= {this.handleInputChange} 
     submit = {this.handleCitySubmit}
     /> 
     <Result weather={this.state} />
    </div>
    ); 
  }
}


export default App;
