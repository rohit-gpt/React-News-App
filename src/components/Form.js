import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {

    render() {
        return (

            <div className = "col-md-3 sidepanel">
              
            <a href="#" style={{ float: 'right', textDecoration: 'underline' }}>Reset</a>
            <h4>Filter News</h4>
            <hr/>
            <h5 style={{ color: 'grey' }}>LANGUAGE</h5>
            
           <form onSubmit={ this.props.getNews }>
            
            <select name="language" className="filterselect">
              <option value="">Select</option>
              <option value="fr">French</option>
              <option value="en">English</option>
              <option value="zh">Chinese</option>
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

            </form>

            </div>


        )
    }

}

export default Form;