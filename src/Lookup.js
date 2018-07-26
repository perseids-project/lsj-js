import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Parser from './lib/Parser';

const dictionaryPropType = PropTypes.shape({
  dictionary: PropTypes.object.isRequired,
  exact: PropTypes.object.isRequired,
  greek: PropTypes.object.isRequired,
  latin: PropTypes.object.isRequired,
});

const historyPropType = PropTypes.shape({
  push: PropTypes.func.isRequired,
});

const matchPropType = PropTypes.shape({
  params: PropTypes.shape({
    word: PropTypes.string,
  }).isRequired,
});

class Lookup extends Component {
  static propTypes = {
    dictionary: dictionaryPropType.isRequired,
    history: historyPropType.isRequired,
    match: matchPropType.isRequired,
  }

  constructor(props) {
    super(props);

    const { dictionary } = this.props;

    this.parser = new Parser(dictionary);
    this.handleChange = this.handleChange.bind(this);
    this.renderEntries = this.renderEntries.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { history } = this.props;

    history.push(`/${value}`);
  }

  renderEntries(word) {
    const entries = this.parser.lookup(word);

    return entries.map(entry => <p className="text-left" key={entry.headword} dangerouslySetInnerHTML={{ __html: entry.definition }} />); // eslint-disable-line react/no-danger
  }

  render() {
    const { match } = this.props;
    const word = match.params.word || '';

    return (
      <div className="mt-4">
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <input className="form-control mb-4" autoFocus type="text" value={word} onChange={this.handleChange} placeholder="Enter word..." aria-label="lookup" />
        {this.renderEntries(word)}
      </div>
    );
  }
}

export default Lookup;
