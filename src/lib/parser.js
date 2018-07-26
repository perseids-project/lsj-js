class Parser {
  constructor(dictionary) {
    this.matchers = [dictionary.exact, dictionary.greek, dictionary.latin];
    this.dictionary = dictionary.dictionary;
  }

  lookup(string) {
    const key = string.toLowerCase().normalize();
    const results = [];
    const headwords = {};
    const { dictionary } = this;

    this.matchers.forEach((matcher) => {
      if (matcher[key]) {
        matcher[key].forEach((headword) => {
          if (!headwords[headword]) {
            headwords[headword] = true;

            results.push({ headword, definition: dictionary[headword] });
          }
        });
      }
    });

    return results;
  }
}

export default Parser;
