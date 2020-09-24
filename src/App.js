import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import WeatherIn from './components/weather/WeatherIn'
import weatherService from './services/weatherService'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Greenhouse from './components/greengouse/Greenhouse';
import Home from './components/home/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weather: [],
      dates: []
    }
  }

  async componentDidMount() {
    const weatherObj = new weatherService()
    weatherObj.getWeather()
      .then(res => this.setState({weather: res})) 

    weatherObj.getDates()
      .then(res => this.setState({  dates: res }))
  }

  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Menu />
          
          <Route exact path='/' component={Home} />
          <Route path='/greenhouse' render={() => <Greenhouse />} />
          <Route path='/forecast' render={() => <WeatherIn temp={this.state.weather} dates={this.state.dates}/>} />
          
        </>
      </Router>
    )
  }
}

export default App;
