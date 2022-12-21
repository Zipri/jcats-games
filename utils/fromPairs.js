const fromPairs = (array) => {
  const pairs = {};
  array.map(([key, value]) => pairs[key] = value);
  return pairs;
};

export default fromPairs;
