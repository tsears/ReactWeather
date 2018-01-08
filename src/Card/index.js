import React from 'react'
import * as icons from './icons'
import PropTypes from 'prop-types'
import './card.scss'

function kebabToCamel (str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase() })
}

export default class Card extends React.Component {
  render () {
    const icon = this.props.icon
      ? icons[kebabToCamel(this.props.icon)]
      : icons.defaultIcon
    const temperature = this.props.temperature || 0

    return (
      <div className="card">
        <div className="icon-container">
          <img src={icon}/>
        </div>
        <div>
          <h2 className="center">{Math.round(temperature)}&deg;</h2>
        </div>
        <p className="center">
          {this.props.summary}
        </p>
      </div>
    )
  }
}

Card.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.number,
  summary: PropTypes.string,
}
