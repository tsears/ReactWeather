import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { panel } from './panel'
import CurrentConditions from './CurrentConditions'
import TodayForecast from './TodayForecast'
import SearchBox from './SearchBox'
import SVG from 'react-inlinesvg'
import loading from './loading.svg'

import './App.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: {},
      query: '97116',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (query) {
    const overlay = document.querySelector('.loading-overlay')
    overlay.classList.remove('hidden')
    overlay.classList.add('visible')

    fetch(`https://api.tsears.net/weather/?query=${this.state.query}`)
      .then(response => response.json())
      .then(data => {
        const weatherData = JSON.parse(data.body)
        console.log(weatherData)
        this.setState({
          current: weatherData.currently,
          today: weatherData.daily.data[0],
        })
        overlay.classList.remove('visible')
        overlay.classList.add('hidden')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render (props) {
    const CurrentPanel = panel(CurrentConditions)
    const TodayPanel = panel(TodayForecast)

    return (
      <div className="App">
        <div className="loading-overlay hidden">
          <SVG src={loading}/>
        </div>

        <div id="big-container">
          <h1 className="center">The Weather</h1>
          <SearchBox submit={this.handleSubmit}/>
        </div>

        <CurrentPanel {...this.state.current}/>

        <TodayPanel {...this.state.today}/>
      </div>
    )
  }
}

export default App
