const initialState = {
  quote: null,
  news: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "TONALD_SAYS":
      return {...state, quote:action.payload}
    case "BAD_NEWS":
      return {...state, news:action.payload}
    default:
      return {...state}
  }
}
