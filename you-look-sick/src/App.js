import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Header, NameForm, Results, Footer } from './components'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tonaldQuote: null,
      news: null,
      name: null,
      location: null,
      randomFace: null,
    }
    this.handleForm = this.handleForm.bind(this)
    this.tonaldSays = this.tonaldSays.bind(this)
    this.badNews = this.badNews.bind(this)
  }
  componentDidMount () {
    let randomFace = Math.floor(Math.random() * 50000)
    this.setState({
      randomFace
    })
  }
  tonaldSays (name) {
    console.log('name ', name)
    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then ((response) => {
        this.setState({
          tonaldQuote: response.data.message
        })
      })
      .catch((error) => {
        this.setState({
          tonaldQuote: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
        })
      })
  }
  badNews (loc) {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
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
  handleForm (inputForm) {
    this.setState({
      name: inputForm.name,
      location: inputForm.location
    }, () => {
      this.tonaldSays(this.state.name)
      this.badNews(this.state.location)
    })
  }
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header randomFace={this.state.randomFace} />
          <Route exact path="/" component={(props) => <NameForm handleForm={this.handleForm} {...props}/>} />
          <Route exact path="/sad-world" component={(props) => <Results news={this.state.news} quote={this.state.tonaldQuote} {...props} />} />
          {/*<Route exact path="/sad-world" component={(props) => this.state.tonaldQuote ? <TonaldSays quotes={this.state.tonaldQuote} {...props}/> : null} />
          {this.state.news ? <News news={this.state.news} /> : null} */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
