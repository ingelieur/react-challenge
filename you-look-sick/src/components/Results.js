import React from 'react'
import { TonaldSays, News } from '.'
import { Redirect, Link } from 'react-router-dom'

function Results (props) {
  if(props.isSubmitted) {
    return (
      <div>
        <TonaldSays quote={props.quote}/>
        <News news={props.news}/>
        <div className="has-text-centered">
          <Link to="/" className="button is-primary is-outlined is-large">Start Over</Link>
        </div>
      </div>
    )
  }
  return (
    <Redirect to={{
      pathname: '/'
    }} />
  )
}

export default Results
