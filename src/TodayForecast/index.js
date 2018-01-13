import React from 'react'
import Card from '../Card'
import './today-forecast.scss'
import PropTypes from 'prop-types'
import KVTable from '../KVTable'
import { compass, formatters } from '../utils'

function extractTableProps (data) {
  return {
    'High':
      <span>
        {formatters.metricAroundTime(
          formatters.temperature,
          data.temperatureHigh,
          data.temperatureHighTime * 1000)
        }
      </span>,
    'Low':
      <span>
        {formatters.metricAroundTime(
          formatters.temperature,
          data.temperatureLow,
          data.temperatureLowTime * 1000)
        }
      </span>,
    'Sunrise': <span>{formatters.shortTime(data.sunriseTime * 1000)}</span>,
    'Sunset': <span>{formatters.shortTime(data.sunsetTime * 1000)}</span>,
    'Chance of Precip': <span>{formatters.percent(data.precipProbability)}</span>,
    'Max Precipitation Intensity':
      <span>
        {formatters.metricAroundTime(
          formatters.inchesPerHour,
          data.precipIntensityMax,
          data.precipIntensityMaxTime * 1000)
        }
      </span>,
    'Humidity': <span>{formatters.percent(data.humidity)}</span>,
    'Wind': <span>{formatters.mphInDirection(data.windSpeed, compass.cardinalFromAngle(data.windBearing))}</span>,
    'Visibility': <span>{formatters.distanceInMiles(data.visibility)}</span>,
    'Dew Point': <span>{formatters.temperature(data.dewPoint)}</span>,
  }
}

export default class TodayForecastPanel extends React.Component {
  render () {
    /* eslint-disable indent */
    return (
      <div className="current-conditions">
        <h2>Today&apos;s Forecast</h2>
        <div>
          <Card high={this.props.temperatureHigh}
                low={this.props.temperatureLow}
                icon={this.props.icon}
                summary={this.props.summary} />
          <KVTable data={extractTableProps(this.props)}/>
        </div>
      </div>
    )
    /* eslint-enable */
  }
}

TodayForecastPanel.propTypes = {
  temperatureHigh: PropTypes.number,
  temperatureLow: PropTypes.number,
  icon: PropTypes.string,
  summary: PropTypes.string,
  precipProbability: PropTypes.number,
  precipIntensity: PropTypes.number,
}
