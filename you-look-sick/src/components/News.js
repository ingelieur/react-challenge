import React from 'react'

class News extends React.Component {
  render () {
    if (this.props.news === null) {
      return (
        <div className="container">
          <br />
          <br />
          <blockquote className="title has-text-centered">loading ...</blockquote>
          <br />
          <br />
        </div>
      )
    }
    else if (typeof this.props.news === 'string') {
      return (
        <div className="container">
          <br />
          <br />
          <blockquote className="title has-text-centered">{this.props.news}</blockquote>
          <br />
          <br />
        </div>
      )
    }
    return (
      <div className="container">
        <br />
        <br />
        <p className="subtitle">If that's not depressing enough, here are some news from your country. <br />
          Count how many of them are good news? <br />
          Is there even one of them?</p>
        <div className="columns is-multiline">
          {this.props.news.map((info, index) => {
            return (
              <div key={index} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    { info.multimedia.length > 0 ? (
                      <figure className="image is-4by3">
                        <img src={`http://nytimes.com/${info.multimedia[0].url}`} alt="credit: NYT" />
                      </figure>) : (
                        <figure className="image is-4by3">
                          <img src="https://dummyimage.com/vga" alt="credit: NYT" />
                        </figure>)}
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
                  </div>)
          })
          }
        </div>
      </div>
    )
  }
}

export default News
