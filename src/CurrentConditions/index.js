import React from 'react'
import Card from '../Card' // eslint-disable-line no-unused-vars
import './current-conditions.scss'
import PropTypes from 'prop-types'
import KVTable from '../KVTable'
import { compass, formatters } from '../utils'

function extractTableProps (data) {
  return {
    'Chance of Precip': <span>{formatters.percent(data.precipProbability)}</span>,
    'Precipitation Intensity': <span>{formatters.inchesPerHour(data.precipIntensity)}</span>,
    'Humidity': <span>{formatters.percent(data.humidity)}</span>,
    'Wind': <span>{formatters.mphInDirection(data.windSpeed, compass.cardinalFromAngle(data.windBearing))}</span>,
    'Visibility': <span>{formatters.distanceInMiles(data.visibility)}</span>,
    'Dew Point': <span>{formatters.temperature(data.dewPoint)}</span>,
    'Feels Like': <span>{formatters.temperature(data.apparentTemperature)}</span>,
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
