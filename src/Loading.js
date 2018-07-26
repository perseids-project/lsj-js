import React from 'react';
import PropTypes from 'prop-types';

import './Loading.css';

const Loading = ({ text }) => (
  <div className="mt-2">
    <div className="loading-spinner mb-2" />
    {text}
  </div>
);

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loading;
