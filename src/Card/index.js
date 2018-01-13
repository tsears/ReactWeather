import React from 'react'
import * as icons from './icons'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import Temperature from './temperature'
import './card.scss'

function kebabToCamel (str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase() })
}

export default class Card extends React.Component {
  render () {
    const icon = this.props.icon
      ? icons[kebabToCamel(this.props.icon)]
      : icons.defaultIcon

    return (
      <div className="card">
        <div className="icon-container">
          <SVG src={icon}/>
        </div>
        <Temperature
          high={this.props.high}
          low={this.props.low}
          temperature={this.props.temperature}
        />
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
  high: PropTypes.number,
  low: PropTypes.number,
  summary: PropTypes.string,
}
