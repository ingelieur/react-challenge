import * as ActionTypes from './constants'

export const handleForm = () => {
  return {
    type: ActionTypes.HANDLE_FORM,
  }
}

export const handleName = (name) => {
  return {
    type: ActionTypes.HANDLE_NAME,
    payload: name,
  }
}

export const handleLoc = (loc) => {
  return {
    type: ActionTypes.HANDLE_LOC,
    payload: loc,
  }
}

export const tonaldSays = (name) => {
  return {
    type: ActionTypes.TONALD_SAYS,
    payload: name,
  }
}

export const tonaldSaysResult = (quote) => {
  return {
    type: ActionTypes.TONALD_SAYS_RESULT,
    payload: quote,
  }
}

export const badNews = (loc) => {
  return {
    type: ActionTypes.BAD_NEWS,
    payload: loc,
  }
}

export const badNewsResult = (news) => {
  return {
    type: ActionTypes.BAD_NEWS_RESULT,
    payload: news
  }
}

//export const tonaldSays = (name) => {
//  return (dispatch) => {
//    Axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
//      .then ((response) => {
//        cons
//        dispatch ({
//          type: "TONALD_SAYS",
//          payload: response.data.message,
//        })
//      })
//      .catch((error) => {
//        dispatch ({
//          type: "TONALD_SAYS",
//          payload: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
//        })
//      })
//  }
//}

//export const badNews = (loc) => {
//  return (dispatch) => {
//    Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
//      params: {
//        'api-key': "6bfa079ba439477ead940b11ec70b476",
//        'fq': loc,
//        'sort': 'newest'
//      }
//    })
//      .then ((response) => {
//        dispatch({
//          type: "BAD_NEWS",
//          payload: response.data.response.docs,
//        })
//      })
//      .catch ((error) => {
//        dispatch({
//          type: "BAD_NEWS",
//          payload:`Your country is so sad it's not even on the news.`
//        })
//      })
//  }
//}
