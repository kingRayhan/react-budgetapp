import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import App from './App'
import './app.css'
import store from './store/index'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
