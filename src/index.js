import React from 'react' // eslint-disable-line no-unused-vars
import App from './App' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import './index.scss'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
