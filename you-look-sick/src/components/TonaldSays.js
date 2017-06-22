import React from 'react'

function TonaldSays (props) {
  if (props.quote === null) {
    return (
      <div className="container has-text-centered">
        <br />
        {/*<blockquote className="title has-text-centered">loading ...</blockquote>*/}
        <a className="button is-large is-loading is-white is-outlined">loading</a>
        <br />
      </div>
    )
  }
  return (
    <div className="container">
      <br />
      <div className="content">
        <p className="subtitle has-text-centered">This is what Tonald Drump has to say about you: </p>
        <br />
        <blockquote className="title has-text-centered">{props.quote}</blockquote>
      </div>
    </div>
  )
}

export default TonaldSays
