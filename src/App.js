import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form.js';
import Articles from './components/Articles.js';
import Navbar from './components/Navbar.js';
import { async } from 'q';

const API_KEY = "x06IevtSvwn5NbOaqlVu7OUbZipCznNIvsFESkc_-pzQcwvO";

class App extends Component {

  state = {
    news: []
  }

  getNews = async (e) => {
    const language = e.target.elements.language.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${ API_KEY }&language=${ language }`);
    
    const data = await api_call.json();
    this.setState({
      news: data.news 
    })
  }

  componentDidMount = async() => {
    const api_call = await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${ API_KEY }`);
    
    const data = await api_call.json();
    this.setState({
      news: data.news 
    })
  }

  render() {
    return (
      <div className = "App">

      <Navbar />

        <div className = "container outerbox">

          <Articles articles = { this.state.news } />

          <Form getNews = {this.getNews}  />
          

        </div>

      </div>
    )
  }
}

export default App;
