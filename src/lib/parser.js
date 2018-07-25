class Parser {
  constructor(dictionary) {
    this.matchers = [dictionary.exact, dictionary.greek, dictionary.latin];
    this.dictionary = dictionary.dictionary;
  }

  lookup (string) {
    let key = string.toLowerCase().normalize();
    let results = [];
    let headwords = {};
    let dictionary = this.dictionary;

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
