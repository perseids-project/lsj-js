import React, { Component } from 'react';

import Parser from './lib/parser';

const LSJParser = new Parser();

class Lookup extends Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderEntries = this.renderEntries.bind(this);
  }

  handleChange (event) {
    let value = event.target.value;

    this.props.history.push(`/${value}`)
  }

  renderEntries (word) {
    let entries = LSJParser.lookup(word)

    return entries.map((entry) =>
      <p className="text-left" key={entry.headword} dangerouslySetInnerHTML={{ __html: entry.definition }} />
    );
  }

  render () {
    let word = this.props.match.params.word || '';
    return (
      <div>
        <input className="form-control mb-4" type="text" value={word} onChange={this.handleChange} placeholder="Enter word ..." />
        {this.renderEntries(word)}
      </div>
    );
  }
}

export default Lookup;
