import React, { Component } from 'react';
import PropTypes from 'prop-types';

import I18n from '../I18n';
import Parser from '../../lib/Parser';

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

const locationPropType = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
});

class Lookup extends Component {
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

    return entries.map((entry) => <p className="text-left" key={entry.headword} dangerouslySetInnerHTML={{ __html: entry.definition }} />); // eslint-disable-line react/no-danger
  }

  render() {
    const { match, location } = this.props;
    const word = match.params.word || '';

    return (
      <div className="mt-4">
        <input
          className="form-control mb-4"
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
          type="text"
          value={word}
          onChange={this.handleChange}
          placeholder={I18n.getTranslation(location, 'input.placeholder')}
          aria-label="lookup"
        />

        {this.renderEntries(word)}
      </div>
    );
  }
}

Lookup.propTypes = {
  dictionary: dictionaryPropType.isRequired,
  history: historyPropType.isRequired,
  match: matchPropType.isRequired,
  location: locationPropType.isRequired,
};

export default Lookup;
