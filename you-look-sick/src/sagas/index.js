import { all } from 'redux-saga/effects'

import { watchTonaldSays, watchBadNews } from './resultSagas'

// run all sagas at once
//export default function* rootSaga() {
//  yield all([
//    watchTonaldSays(),
//  ])
//}

export default function* rootSaga() {
  yield all([
    watchTonaldSays(),
    watchBadNews(),
  ])
}
