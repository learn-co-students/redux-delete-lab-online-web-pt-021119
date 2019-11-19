import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>
          {this.props.name}
          <button>DELETE BAND</button>
        </li>
      </div>
    );
  }
};

export default Band;
