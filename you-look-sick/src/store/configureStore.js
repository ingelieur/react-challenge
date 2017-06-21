import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducers from '../reducers'

const middlewares = applyMiddleware(logger)
const store = createStore(rootReducers, middlewares)

export default store
