import React, { Component } from 'react';

import './Loading.css';

class Loading extends Component {
  render () {
    return (
      <div className="mt-2">
        <div className="loading-spinner mb-2"></div>
        {this.props.text}
      </div>
    );
  }
}

export default Loading;
