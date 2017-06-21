import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, NameForm, Results, Footer, FailPage } from './components'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: null,
      loc: null,
      randomFace: null,
      isSubmitted: false,
    }
    this.handleForm = this.handleForm.bind(this)
  }

  componentDidMount () {
    let randomFace = Math.floor(Math.random() * 50000)
    this.setState({
      randomFace
    })
  }

  handleForm (inputForm) {
    this.setState({
      name: inputForm.name,
      loc: inputForm.location,
      isSubmitted: true
    }, () => {
      //setState is asynchronous => it has a callback function
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/sad-world" component={(props) => <Results name={this.state.name} loc={this.state.loc} isSubmitted={this.state.isSubmitted} {...props} />} />
            <Route exact path="/" component={(props) => <NameForm handleForm={this.handleForm} {...props}/>} />
            <Route path="" component={FailPage} />
          </Switch>
          <Footer randomFace={this.state.randomFace} />
        </div>
      </BrowserRouter>
    );
}
}

export default App
