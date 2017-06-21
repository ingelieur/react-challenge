import React from 'react'

function News (props) {
  if (props.news === null) {
    return (
      <div className="container has-text-centered">
        <br />
        <br />
        {/*<blockquote className="title has-text-centered">loading ...</blockquote>*/}
        <a className="button is-large is-loading is-white is-outlined" />
        <br />
        <br />
      </div>
    )
  }
  else if (typeof props.news === 'string') {
    return (
      <div className="container">
        <br />
        <br />
        <blockquote className="title has-text-centered">{props.news}</blockquote>
        <br />
        <br />
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <br />
        <br />
        <p className="subtitle has-text-centered">The most depressing thing about the quote above is that <br />it's so possible that those words are coming from the POTUS.<br/ ><br />Well, if that's not depressing enough, here are some news from your country. <br />Please count, how many of them are good news? <br />Is there even one of them?
        </p>
        <br />
        <div className="columns is-multiline">
          {props.news.map((info, index) => {
            return (
              <div key={index} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    { info.multimedia.length > 0 ? (
                      <figure className="image is-4by3">
                        <img src={`http://nytimes.com/${info.multimedia[0].url}`} alt="credit: NYT" />
                      </figure>) : (
                        <figure className="image is-4by3">
                          <img src="https://unsplash.it/g/400/300?random" alt="credit: Unsplash" />
                        </figure>)
                    }
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="subtitle">{info.headline.main}</p>
                      <small>{info.byline.original}</small>
                      <br />
                      <br />
                      {info.snippet}
                      <br />
                      <br />
                      <a href={info.web_url}>Read More</a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
