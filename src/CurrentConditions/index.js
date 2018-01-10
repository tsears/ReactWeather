import React from 'react'
import Card from '../Card' // eslint-disable-line no-unused-vars
import './current-conditions.scss'
import PropTypes from 'prop-types'
import KVTable from '../KVTable'
import { compass } from '../utils'

function extractTableProps (data) {
  const precipProbability = data.precipProbability || data.precipProbability === 0
    ? Math.round(data.precipProbability * 100) + '%'
    : null

  const precipIntensity = typeof data.precipIntensity !== 'undefined'
    ? data.precipIntensity <= 0.01
      ? 'less than 0.01 inch per hour'
      : data.precipIntensity.toFixed(2)
    : null

  const humidity = data.humidity
    ? (data.humidity * 100) + '%'
    : null

  const windDirection = data.windBearing
    ? compass.cardinalFromAngle(data.windBearing)
    : null

  const wind = typeof data.windSpeed !== 'undefined'
    ? data.windSpeed !== 0
      ? `${data.windSpeed.toFixed(1)}mph ${windDirection}`
      : 'None'
    : null

  const visibility = data.visibility
    ? `${data.visibility} miles`
    : null

  const dewPoint = data.dewPoint
    ? `${Math.round(data.dewPoint)}`
    : null

  const windChill = data.apparentTemperature
    ? `${Math.round(data.apparentTemperature)}`
    : null

  return {
    'Chance of Precip': <span>{precipProbability}</span>,
    'Precipitation Intensity': <span>{precipIntensity}</span>,
    'Humidity': <span>{humidity}</span>,
    'Wind': <span>{wind}</span>,
    'Visibility': <span>{visibility}</span>,
    'Dew Point': dewPoint ? <span>{dewPoint}&deg;</span> : <span></span>,
    'Feels Like': windChill ? <span>{windChill}&deg;</span> : <span></span>,
  }
}

export default class CurrentConditionsPanel extends React.Component {
  render () {
    /* eslint-disable indent */
    return (
      <div className="current-conditions">
        <h2>Current Conditions</h2>
        <div>
          <Card temperature={this.props.temperature}
                icon={this.props.icon}
                summary={this.props.summary} />
          <KVTable data={extractTableProps(this.props)}/>
        </div>
      </div>
    )
    /* eslint-enable */
  }
}

CurrentConditionsPanel.propTypes = {
  temperature: PropTypes.number,
  icon: PropTypes.string,
  summary: PropTypes.string,
  precipProbability: PropTypes.number,
  precipIntensity: PropTypes.number,
}
