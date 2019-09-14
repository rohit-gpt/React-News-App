import React, { Component } from 'react';

class Articles extends Component {
    render() {
            return (
                <div>
                { this.props.articles.map((article) => {
                    return (
                      <div key={ article.id } className="col-md-9" style={{ float: "right" }}>
              
                      <div className="article">
                        <h3>{ article.title }</h3>
                        <h6 style={{ color: 'lightgrey' }}>{ article.author } | { article.published } </h6>
                        <br />
              
                        <p>
                          { article.description }
                        </p>
                        <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Referrence</span><br/>
                        <a href={ article.url }>{ article.url }</a>
                      </div>
              
                      </div>
                    )
                })}
                </div> 
            )
    }
}


export default Articles;