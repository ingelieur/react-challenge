import { HANDLE_FORM, HANDLE_NAME, HANDLE_LOC } from '../actions/actionTypes'

const initialState = {
  name: null,
  loc: null,
  isSubmitted: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_FORM":
      return {...state, isSubmitted: true}
    case "HANDLE_NAME":
      return {...state, name: action.payload}
    case "HANDLE_LOC":
      return {...state, loc: action.payload}
    default:
      return {...state}
  }
}
