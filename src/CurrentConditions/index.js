import React from 'react'
import Card from '../Card' // eslint-disable-line no-unused-vars
import './current-conditions.scss'
import PropTypes from 'prop-types'

export default class CurrentConditionsPanel extends React.Component {
  render () {
    return (
      <div className="current-conditions">
        <h2>Current Conditions</h2>
        <div> <Card temperature={this.props.temperature} icon={this.props.icon} /> </div>
      </div>
    )
  }
}

CurrentConditionsPanel.propTypes = {
  temperature: PropTypes.number,
  icon: PropTypes.string,
}
