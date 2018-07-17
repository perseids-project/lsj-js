import dictionary from '../dictionaries/dictionary.json';
import exact from '../dictionaries/exact-match.json';
import greek from '../dictionaries/greek-match.json';
import latin from '../dictionaries/latin-match.json';

class Parser {
  constructor() {
    this.matchers = [exact, greek, latin];
    this.dictionary = dictionary;
  }

  lookup (string) {
    let key = string.toLowerCase().normalize();
    let results = [];
    let headwords = {};

    this.matchers.forEach((matcher) => {
      if (matcher[key]) {
        matcher[key].forEach((headword) => {
          if (!headwords[headword]) {
            headwords[headword] = true;

            results.push({ headword: headword, definition: dictionary[headword] });
          }
        });
      }
    });

    return results;
  }
}

export default Parser;
