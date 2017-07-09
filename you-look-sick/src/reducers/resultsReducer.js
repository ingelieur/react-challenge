import { TONALD_SAYS_RESULT, BAD_NEWS_RESULT, } from '../actions/constants'

const initialState = {
  quote: null,
  news: null,
}

const tonaldSaysResult = (state, payload) => {
  return {...state, quote:payload}
}

const badNewsResult = (state, payload) => {
  return {...state, news: payload}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TONALD_SAYS_RESULT: return tonaldSaysResult(state, action.payload)
    case BAD_NEWS_RESULT: return badNewsResult(state, action.payload)
    default: return state
  }
}
