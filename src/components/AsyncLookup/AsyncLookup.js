import React from 'react';
import Loadable from 'react-loadable';
import localForage from 'localforage';

import Loading from '../Loading';
import Lookup from '../Lookup';

const DICTIONARY_VERSION = 'dictionary-0.0.3';

const cacheDictionary = (loaded) => {
  const dictionary = loaded.default;

  localForage.clear().then(() => localForage.setItem(DICTIONARY_VERSION, dictionary));

  return dictionary;
};

const lookupDictionary = () => (
  localForage.getItem(DICTIONARY_VERSION).then(d => (
    { success: !!d, dictionary: d }
  )).catch(() => (
    { success: false }
  ))
);

const WaitForDownload = Loadable({
  loader: () => import('../../lib/Dictionary').then(cacheDictionary),
  loading: () => <Loading text="Downloading dictionary..." />,
  render(dictionary, props) {
    return <Lookup {...props} dictionary={dictionary} />;
  },
});

const AsyncLookup = Loadable({
  loader: lookupDictionary,
  loading: () => <Loading text="Loading dictionary from cache..." />,
  render(loaded, props) {
    if (loaded.success) {
      return <Lookup {...props} dictionary={loaded.dictionary} />;
    }

    return <WaitForDownload {...props} />;
  },
});

export default AsyncLookup;
