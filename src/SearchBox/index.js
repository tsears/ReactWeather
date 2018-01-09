import React from 'react'
import SVG from 'react-inlinesvg'
import magnifyIcon from './magnify.svg'
import PropTypes from 'prop-types'

export default class SearchBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: '97116',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({query: e.target.value})
  }

  handleSubmit (e) {
    this.props.submit(e.target.value)
  }

  render () {
    return (
      <div id="search-container">
        <input placeholder="Enter City or Zip" value={this.state.query} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>
          <SVG src={magnifyIcon}/>
        </button>
        <p>City, State -OR- Zip Code</p>
      </div>
    )
  }
}

SearchBox.propTypes = {
  submit: PropTypes.func,
}
