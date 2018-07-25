import React, { Component } from 'react';

import Parser from './lib/Parser';

class Lookup extends Component {
  constructor (props) {
    super(props);

    this.parser = new Parser(this.props.dictionary);
    this.handleChange = this.handleChange.bind(this);
    this.renderEntries = this.renderEntries.bind(this);
  }

  handleChange (event) {
    let value = event.target.value;

    this.props.history.push(`/${value}`)
  }

  renderEntries (word) {
    let entries = this.parser.lookup(word)

    return entries.map((entry) =>
      <p className="text-left" key={entry.headword} dangerouslySetInnerHTML={{ __html: entry.definition }} />
    );
  }

  render () {
    let word = this.props.match.params.word || '';

    return (
      <div className="mt-4">
        <input className="form-control mb-4" type="text" value={word} onChange={this.handleChange} placeholder="Enter word ..." />
        {this.renderEntries(word)}
      </div>
    );
  }
}

export default Lookup;
