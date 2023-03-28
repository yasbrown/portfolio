import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

library.add(faAnglesDown)

ReactDOM.render(<App/>, document.querySelector("#root"));
