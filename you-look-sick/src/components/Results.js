import React from 'react'
import { TonaldSays, News } from '.'
import { Redirect } from 'react-router-dom'

function Results (props) {
  console.log(props)
  //if (props.quote === null) {
  //  return (
  //    <Redirect to={{
  //      pathname: '/'
  //    }} />
  //  )
  //}
  return (
    <div>
      <TonaldSays quote={props.quote}/>
      <News news={props.news}/>
    </div>
  )
}

export default Results
