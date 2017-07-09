import Axios from 'axios'

export const tonaldSays = (name) => {
  return Axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
}

export const badNews = (loc) => {
  return Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
    params: {
      'api-key': "6bfa079ba439477ead940b11ec70b476",
      'fq': loc,
      'sort': 'newest'
    }
  })
}
