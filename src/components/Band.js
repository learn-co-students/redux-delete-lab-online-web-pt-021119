import React, { Component } from 'react';

const band = props => {
    return(
      <div>
        <li>
          {props.band.name}
          <button onClick={ () => props.deleteBand(props.band.id) }>DELETE BAND</button>
        </li>
      </div>
    )
}

export default band;
