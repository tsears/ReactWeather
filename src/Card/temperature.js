import React from 'react'
import PropTypes from 'prop-types'
import { formatters } from '../utils'

export default class Temperature extends React.Component {
  render () {
    if (this.props.high && this.props.low) {
      return (
        <div className="temp-container">
          <h2 className="low">
            {formatters.temperature(this.props.low)}
          </h2>
          <h2 className="high">
            {formatters.temperature(this.props.high)}
          </h2>
        </div>
      )
    } else if (this.props.temperature) {
      return (
        <div className="temp-container">
          <h2 className="center">
            {formatters.temperature(this.props.temperature)}
          </h2>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

Temperature.propTypes = {
  high: PropTypes.number,
  low: PropTypes.number,
  temperature: PropTypes.number,
}
