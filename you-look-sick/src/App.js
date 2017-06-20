import React from 'react'
import axios from 'axios'
import { Header, NameForm, TonaldSays } from './components'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tonaldSays: null,
      name: null,
      location: null,
    }
    this.handleForm = this.handleForm.bind(this)
  }
  tonaldSays (name) {
    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then ((response) => {
        console.log(response.data.message)
        this.setState({
          tonaldSays: response.data.message
        })
      })
      .catch((response) => {
        this.setState({
          tonaldSays: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
        })
      })
  }
  handleForm (inputForm) {
    this.setState({
      name: inputForm.name,
      location: inputForm.location
    })
  }
  render () {
    return (
      <div className="App">
        <Header />
        <NameForm handleForm={this.handleForm} />
        <a onClick={() => this.tonaldSays('shabrina')} className="button">Tonald</a>
        <TonaldSays
          quotes={this.state.tonaldSays}
        />
      </div>
    );
  }
}

export default App
