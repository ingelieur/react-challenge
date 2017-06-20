import React from 'react'
import axios from 'axios'
import { Header, NameForm, TonaldSays } from './components'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tonaldQuote: null,
      name: null,
      location: null,
    }
    this.handleForm = this.handleForm.bind(this)
    this.tonaldSays = this.tonaldSays.bind(this)
  }
  tonaldSays (name) {
    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then ((response) => {
        this.setState({
          tonaldQuote: response.data.message
        })
      })
      .catch((response) => {
        this.setState({
          tonaldQuote: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
        })
      })
  }
  handleForm (inputForm) {
    console.log(inputForm.name)
    this.setState({
      name: inputForm.name,
      location: inputForm.location
    }, () => {
      this.tonaldSays(this.state.name)
    })
  }
  render () {
    return (
      <div className="App">
        <Header />
        <NameForm handleForm={this.handleForm} />
        {this.state.tonaldQuote ? <TonaldSays quotes={this.state.tonaldQuote}/> : null}
      </div>
    );
  }
}

export default App
