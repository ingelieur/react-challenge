import React from 'react'
import { TonaldSays, News } from '.'
import { Redirect, Link } from 'react-router-dom'
import Axios from 'axios'


class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: null,
      news: null,
    }
  }

  redir() {
    return (
      <Redirect to={{
        pathname: '/'
      }} />
    )
  }

  componentDidMount () {
    if(this.props.isSubmitted) {
      this.tonaldSays(this.props.name)
      this.badNews(this.props.loc)
    } else {
      this.redir()
    }
  }

  tonaldSays (name) {
    Axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then ((response) => {
        this.setState({
          quote: response.data.message
        })
      })
      .catch((error) => {
        this.setState({
          quote: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
        })
      })
  }

  badNews (loc) {
    Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
      params: {
        'api-key': "6bfa079ba439477ead940b11ec70b476",
        'fq': loc,
        'sort': 'newest'
      }
    })
      .then ((response) => {
        this.setState({
          news: response.data.response.docs
        })
      })
      .catch ((error) => {
        this.setState({
          news: `Your country is so sad it's not even on the news.`
        })
      })
  }

  render () {
    if(this.props.isSubmitted) {
      return (
        <div>
          <TonaldSays quote={this.state.quote}/>
          <News news={this.state.news}/>
          <div className="has-text-centered">
            <Link to="/" className="button is-primary is-outlined is-large">Start Over</Link>
          </div>
        </div>
      )
    }
    console.log(this.redir);
    return this.redir()
  }
}

export default Results
