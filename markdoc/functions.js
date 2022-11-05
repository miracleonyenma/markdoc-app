// ./markdoc/functions.js

export const includes = {
  transform(parameters) {
    const [string, value] = Object.values(parameters);

    return string.includes(value);
  },
};
