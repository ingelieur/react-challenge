const initialState = {
  name: null,
  loc: null,
  isSubmitted: false,
}

export default (state = initialState, action) => {
  if (action.type === "HANDLE_FORM") {
    return {...state, isSubmitted: true}
  }
  else if (action.type === "HANDLE_NAME") {
    return {...state, name: action.payload}
  }
  else if (action.type === "HANDLE_LOC") {
    return {...state, loc: action.payload}
  }
  return state
}
