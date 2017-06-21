import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, Footer, FailPage } from './components'
import { Results, NameForm } from './containers'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      randomFace: null,
    }
  }

  componentDidMount () {
    let randomFace = Math.floor(Math.random() * 50000)
    this.setState({
      randomFace
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/sad-world" component={Results} />
            <Route exact path="/" component={NameForm} />
            <Route path="" component={FailPage} />
          </Switch>
          <Footer randomFace={this.state.randomFace} />
        </div>
      </BrowserRouter>
    );
}
}

export default App
