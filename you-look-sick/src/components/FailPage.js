import React from 'react'
import { Redirect } from 'react-router-dom'

class FailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirected: false,
    }
  }

  componentDidMount () {
    setTimeout (() => {
      this.setState({isRedirected: true})
    }, 5000)
  }

  render () {
    const { isRedirected } = this.state
    return (
      <div className="container has-text-centered">
        <br />
        <p className="title">See? The world is so sad. You can't even find the page that you want.</p>
        <br />
        <p>Worry not, you'll be redirected to my home in five seconds.</p>
        {isRedirected ? <Redirect to={{pathname: '/'}}/> : null}
      </div>
    )
  }
}

export default FailPage
