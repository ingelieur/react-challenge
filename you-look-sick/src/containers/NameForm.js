import React from 'react'
import { Link } from 'react-router-dom'

import store from '../store/configureStore'
import { handleForm, handleName, handleLoc } from '../actions'

class NameForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: store.getState().form.name,
      location: store.getState().form.loc,
    }
    store.subscribe(() => {
      this.setState({
        name: store.getState().form.name,
        loc: store.getState().form.loc,
      })
    })
  }

  render () {
    return (
      <div className="container">
        <br />
        <br />
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <p className="title" style={{color: 'white',}}>
              {this.state.name === null ? `Please input your name and origin.` : null}
              <br />
              {this.state.name === null ? `Then` : `Hi ${this.state.name}!`} I'll tell you some bad news.
            </p>
            <div className="field">
              <label className="label">Nickname</label>
              <p className="control">
                <input
                  onChange={(event) => store.dispatch(handleName(event.target.value))}
                  className="input"
                  type="text"
                  placeholder="Nickname"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Country</label>
              <p className="control">
                <input
                  onChange={(event) => store.dispatch(handleLoc(event.target.value))}
                  className="input"
                  type="text"
                  placeholder="Where do you come from?"
                />
              </p>
            </div>
            <Link to="/sad-world" onClick={() => store.dispatch(handleForm())} className="button is-primary">Submit</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NameForm
