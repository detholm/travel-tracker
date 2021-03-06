import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            <List
              data={this.props.data}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
