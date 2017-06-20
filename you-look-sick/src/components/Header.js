import React from 'react'

function Header (props) {
  return (
    <section className="hero is-medium is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10">
              <h1 className="title">
                Are you OK?
              </h1>
              <br />
              <h2 className="subtitle">
                Are you sure that you are fine? In this sick world, you should not be feeling OK, otherwise you are a, pretty, heartless, person.
                <br />
                So, are you still sure that you are OK? Would you like to know the truth about this world? OK.
                <br />
                Here are the glimpses of what's happening in this world!
              </h2>
            </div>
            <div className="column">
              <figure className="image is-128x128">
                <img className="has-text-centered" src={`https://api.adorable.io/avatars/256/${props.randomFace}`} style={{borderRadius: '25%'}}/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
