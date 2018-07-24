import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center bg-light">
        <div className="container">
          <span className="text-muted">
            <a href="https://github.com/perseids-project/lsj-js" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" "}&bull;{" "}
            <a href="https://github.com/perseids-project/lsj-js/issues" target="_blank" rel="noopener noreferrer">Issues</a>
            {" "}&bull;{" "}
            <a href="http://www.perseids.org/" target="_blank" rel="noopener noreferrer">Perseids</a>
          </span>
          <br />
        </div>
      </div>
    );
  }
}

export default Footer;
