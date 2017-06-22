import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { TonaldSays, News } from '../components'
import { tonaldSays, badNews } from '../actions'

class Results extends React.Component {
  redir() {
    return (
      <Redirect to={{
        pathname: '/'
      }} />
    )
  }

  componentDidMount () {
    if(this.props.form.isSubmitted) {
      this.props.tonaldSays(this.props.form.name)
      this.props.badNews(this.props.form.loc)
    } else {
      this.redir()
    }
  }

  render () {
    if(this.props.form.isSubmitted) {
      return (
        <div>
          <TonaldSays quote={this.props.results.quote}/>
          <News news={this.props.results.news}/>
          <div className="has-text-centered">
            <Link to="/" className="button is-primary is-outlined is-large">Start Over</Link>
          </div>
        </div>
      )
    }
    return this.redir()
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
    results: state.results,
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    tonaldSays: (name) => dispatch(tonaldSays(name)),
    badNews: (loc) => dispatch(badNews(loc)),
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Results)
