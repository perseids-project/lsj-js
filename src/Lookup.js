import React, { Component } from 'react';

import lsj from './dictionaries/lsj.json';
import Parser from './lib/parser';

const LSJParser = new Parser(lsj);

class Lookup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      entries: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.renderEntries = this.renderEntries.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({
      value: value,
      entries: LSJParser.lookup(value),
    });
  }

  renderEntries () {
    return this.state.entries.map((entry) =>
      <p className="text-left" key={entry.headword} dangerouslySetInnerHTML={{ __html: entry.definition }} />
    );
  }

  render () {
    return (
      <div>
        <input className="form-control mb-4" type="text" value={this.state.value} onChange={this.handleChange} />
        {this.renderEntries()}
      </div>
    );
  }
}

export default Lookup;
