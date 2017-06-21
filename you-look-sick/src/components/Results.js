import React from 'react'
import { TonaldSays, News } from '.'
import { Redirect, Link } from 'react-router-dom'

function Results (props) {
  console.log(props)
  if (props.isSubmitted === false) {
   return (
     <Redirect to={{
       pathname: '/'
     }} />
   )
  }
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

export default Results
