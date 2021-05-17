import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {

    // FETCH API:

    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({
    //       gifs: responseData.data
    //     })
    //   })
    //   .catch(error => {
    //     console.log("ERRROR:", error)
    //   })
  }

  // `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`

  performSearch = (query, rating) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=0RWzW8yETpOmVLBuD3PUFfIIQ6K0GQcw&q=${query}&limit=25&rating=${rating}&offset=0&lang=en`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>

            <SearchForm onSearch={this.performSearch} />

          </div>

        </div>

        <div style={{ backgroundColor: "pink", paddingTop: 50, paddingBottom: 20, textAlign: 'center' }}>
          <h1>Gif rating:</h1>


          {this.state.gifs.length > 0 ?
            <h1>{` ${this.state.gifs[0].rating.toUpperCase()}`}</h1>
            : <h1>  </h1>}

        </div>
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div >
    );
  }
}
