import { combineReducers } from 'redux'

import formReducer from './formReducer'
import resultsReducer from './resultsReducer'

export default combineReducers({
  form: formReducer,
  results: resultsReducer,
})
