import { HANDLE_FORM, HANDLE_NAME, HANDLE_LOC, } from '../actions/constants'

const initialState = {
  name: null,
  loc: null,
  isSubmitted: false,
}

const handleForm = (state) => {
  return {...state, isSubmitted: true}
}

const handleName = (state, payload) => {
  return {...state, name: payload}
}

const handleLoc = (state, payload) => {
  return {...state, loc: payload}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_FORM: return handleForm(state)
    case HANDLE_NAME: return handleName(state, action.payload)
    case HANDLE_LOC: return handleLoc(state, action.payload)
    default: return state
  }
}
