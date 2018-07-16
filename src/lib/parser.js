class Parser {
  constructor(dictionary) {
    this._buildObject(dictionary);
  }

  lookup (key) {
    let results = [];
    let headwords = {};

    this.objects.forEach((object) => {
      if (object[key]) {
        object[key].forEach((word) => {
          if (!headwords[word.headword]) {
            headwords[word.headword] = true;

            results.push(word);
          }
        });
      }
    });

    return results;
  }

  _buildObject (dictionary) {
    let exact = {};
    let greek = {};
    let latin = {};

    Object.entries(dictionary).forEach(([key, val]) => {
      val.m.forEach((word) => {
        exact[word] = exact[word] || [];

        exact[word].push({ headword: key, definition: val.d });
      });

      val.g.forEach((word) => {
        greek[word] = greek[word] || [];

        greek[word].push({ headword: key, definition: val.d });
      });

      val.l.forEach((word) => {
        latin[word] = latin[word] || [];

        latin[word].push({ headword: key, definition: val.d });
      });
    });

    this.objects = [exact, greek, latin];
  }
}

export default Parser;
