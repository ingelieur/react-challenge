import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './store/configureStore'

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App
