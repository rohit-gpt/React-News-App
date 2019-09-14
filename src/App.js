import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    news: []
  }

  componentWillMount() {
    axios.get('https://api.currentsapi.services/v1/latest-news?apiKey=nZhI7-u3r_n5AFmmJsY_sraY7pnYSP1eDtyAlaJ3aqgubEdy').then((response) => {
      console.log(response);
      this.setState({
        news: response.data.news
      })
    })
  }

  render() {
    // let news = this.state.news.map((article) => {
    //   return 
    // })

    return (
      <div className = "App">

        <div className = "container outerbox">

          <div className="col-md-9" style={{ float: "right" }}>

            <div className="article">
              <h3>ICASA Concerned About MultiChoice JSE listing</h3>
              <h6 style={{ color: 'lightgrey' }}>JAMIE MICKANE | 2019-02-27 09:53:50 </h6>
              <br />

              <p>
                ICASA said it noted with concern the listing of the MultiChoice Group despite an outstanding complaint before it.
              </p>
              <span style={{ fontSize: '1em', fontWeight: 'bold' }}>Referrence</span><br/>
              <a href="https://ewn.co.za/2019/09/14/mugabe-s-burial-delayed-by-construction-of-a-monument-in-his-honour">https://ewn.co.za/2019/09/14/mugabe-s-burial-delayed-by-construction-of-a-monument-in-his-honour</a>
            </div>

          </div>

          <div className = "col-md-3 sidepanel">
              
            <a href="#" style={{ float: 'right', textDecoration: 'underline' }}>Reset</a>
            <h4>Filter News</h4>
            <hr/>
            <h5 style={{ color: 'grey' }}>LANGUAGE</h5>

            <select className="filterselect">
              <option>Select</option>
              <option>French</option>
              <option>English</option>
              <option>Chinese</option>
              <option>Hindi</option>
            </select>

            <br/><br/>

            <h5 style={{ color: 'grey' }}>COUNTRY</h5>

            <select className="filterselect">
              <option>Select</option>
              <option>France</option>
              <option>Canada</option>
              <option>China</option>
              <option>India</option>
            </select>

            <br/><br/>

            <h5 style={{ color: 'grey' }}>START DATE</h5>
            <input className="filter2" type="date"/>

            <br/><br/>

            <h5 style={{ color: 'grey' }}>END DATE</h5>
            <input className="filter2" type="date"/>

            <br /><br/>

            <button className="filterbtn">Show News</button>

          </div>

          

        </div>

      </div>
    )
  }
}

export default App;
