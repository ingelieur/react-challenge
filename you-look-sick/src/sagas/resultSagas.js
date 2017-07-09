import { put, call, takeEvery } from 'redux-saga/effects'

import * as ActionTypes from '../actions/constants'
import * as Api from '../services/apis'

// worker saga to fetch tonald says
export function* tonaldSays(action) {
  try {
    const quote = yield call(Api.tonaldSays, action.payload)
    yield put({type: ActionTypes.TONALD_SAYS_RESULT, payload: quote.data.message})
  }
  catch (error) {
    yield put({type: ActionTypes.TONALD_SAYS_RESULT, payload: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`})
  }
}

// watcher saga to fetch tonald says
export function* watchTonaldSays() {
  yield takeEvery(ActionTypes.TONALD_SAYS, tonaldSays)
}

export function* badNews(action) {
  try {
    const news = yield call(Api.badNews, action.payload)
    yield put({type: ActionTypes.BAD_NEWS_RESULT, payload: news.data.response.docs})
  }
  catch(error) {
    yield put({type: ActionTypes.BAD_NEWS_RESULT, payload: `Your country is so sad it's not even on the news`})
  }
}

export function* watchBadNews() {
  yield takeEvery(ActionTypes.BAD_NEWS, badNews)
}
