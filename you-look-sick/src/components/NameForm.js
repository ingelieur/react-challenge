import React from 'react'

class NameForm extends React.Component {
  render () {
    return (
      <div className="container">
        <br />
        <br />
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <p className="title" style={{color: 'white',}}>
              Please input your name and origin.
              <br />
              Then I'll tell you the bad news.
            </p>
            <div className="field">
              <label className="label">Nickname</label>
              <p className="control">
                <input className="input" type="text" placeholder="Nickname" />
              </p>
            </div>
            <div className="field">
              <label className="label">Country</label>
              <p className="control">
                <input className="input" type="text" placeholder="Where do you come from?" />
              </p>
            </div>
            <a className="button is-primary">Submit</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NameForm
