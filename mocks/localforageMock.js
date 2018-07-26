const db = {};

const localForage = {
  clear() {
    return new Promise((resolve) => {
      resolve();
    });
  },
  getItem(key) {
    return new Promise((resolve) => {
      const value = db[key];

      resolve(value);
    });
  },
  setItem(key, value) {
    return new Promise((resolve) => {
      db[key] = value;

      resolve(value);
    });
  },
};

export default localForage;
