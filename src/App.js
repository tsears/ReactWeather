import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { panel } from './panel'
import CurrentConditions from './CurrentConditions'
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
        this.setState({current: weatherData.currently})
        overlay.classList.remove('visible')
        overlay.classList.add('hidden')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render (props) {
    const TodayPanel = panel(CurrentConditions)

    return (
      <div className="App">
        <div className="loading-overlay hidden">
          <SVG src={loading}/>
        </div>

        <div id="big-container">
          <h1 className="center">The Weather</h1>
          <SearchBox submit={this.handleSubmit}/>
        </div>

        <TodayPanel {...this.state.current}/>
      </div>
    )
  }
}

export default App
