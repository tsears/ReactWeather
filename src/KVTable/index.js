import React from 'react'
import PropTypes from 'prop-types'

export default class KVTable extends React.Component {
  render () {
    const rows = Object.getOwnPropertyNames(this.props.data).map((p, i) => {
      return (
        <tr key={i}>
          <td>{p}</td>
          <td>{this.props.data[p]}</td>
        </tr>
      )
    })

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

KVTable.propTypes = {
  data: PropTypes.object,
}
