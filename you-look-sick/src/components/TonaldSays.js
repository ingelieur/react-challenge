import React from 'react'

function TonaldSays (props) {
  if (props.quotes !== null) {
    return (
      <div className="container">
        <br />
        <div className="content">
          <p className="subtitle has-text-centered">This is what Tonald Drump has to say about you: </p>
          <br />
          <blockquote className="title has-text-centered">{props.quotes}</blockquote>
        </div>
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default TonaldSays
