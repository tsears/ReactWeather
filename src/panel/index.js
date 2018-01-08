import React from 'react'
import './panel.scss'

export const panel = (WrappedComponent) =>
  class Panel extends React.Component {
    render () {
      return (<div className="panel"><WrappedComponent {...this.props} /></div>)
    }
  }
