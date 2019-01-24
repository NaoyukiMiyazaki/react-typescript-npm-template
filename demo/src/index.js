import React from 'react'
import ReactDOM from 'react-dom'
import Sample from '../../src/index.ts'

window.addEventListener('load', () => {
  ReactDOM.render(<Sample/>, document.getElementById('root'))
})