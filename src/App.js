import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { panel } from './panel'
import CurrentConditions from './CurrentConditions'
import './App.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: {},
      query: '97116',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({query: e.target.value})
  }

  handleSubmit (e) {
    fetch(`https://api.tsears.net/weather/?query=${this.state.query}`)
      .then(response => response.json())
      .then(data => {
        const weatherData = JSON.parse(data.body)
        this.setState({current: weatherData.currently})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render (props) {
    const TodayPanel = panel(CurrentConditions)

    return (
      <div className="App">
        <div className="loading-coverlay">
        </div>

        <div id="big-container">
          <h1 className="center">The Weather</h1>

          <div id="search-container">
            <input placeholder="Enter City or Zip" value={this.state.query} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Search</button>
            <p>City, State -OR- Zip Code</p>
          </div>
        </div>

        <TodayPanel {...this.state.current}/>
      </div>
    )
  }
}

export default App
