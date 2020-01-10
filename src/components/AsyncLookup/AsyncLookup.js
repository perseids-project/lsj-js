import React, { Component } from 'react';
import localForage from 'localforage';

import Loading from '../Loading';
import Lookup from '../Lookup';

const DICTIONARY_VERSION = 'dictionary-0.0.3';

const cacheDictionary = (loaded) => {
  const dictionary = loaded.default;

  localForage.setItem(DICTIONARY_VERSION, dictionary);

  return dictionary;
};

class AsyncLookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingText: 'Loading dictionary from cache...',
      dictionary: null,
    };
  }

  componentDidMount() {
    localForage.getItem(DICTIONARY_VERSION).then((dictionary) => {
      if (dictionary) {
        this.setState({ dictionary });
      } else {
        this.setState({ loadingText: 'Downloading dictionary...' }, this.asyncImport);
      }
    });
  }

  asyncImport() {
    import('../../lib/Dictionary').then(cacheDictionary).then((dictionary) => {
      this.setState({ dictionary });
    });
  }

  render() {
    const {
      loadingText,
      dictionary,
    } = this.state;

    if (dictionary === null) {
      return <Loading text={loadingText} />;
    }

    return <Lookup {...this.props} dictionary={dictionary} />;
  }
}

export default AsyncLookup;
