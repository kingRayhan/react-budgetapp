import { createStore, combineReducers } from 'redux'

import budget from './budgets'

export default createStore(
    combineReducers({ budget }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
