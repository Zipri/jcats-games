const genDiff = (firstObject, secondObject) => {
  const result = {};
  for (const key of Object.keys(firstObject)) {
    if (firstObject[key] === secondObject[key]) {
      result[key] = 'unchanged';
    } else if (secondObject.hasOwnProperty(key)) {
      result[key] = 'changed';
    } else {
      result[key] = 'deleted';
    }
  }
  for (const key of Object.keys(secondObject)) {
    if (firstObject[key] !== secondObject[key] && !firstObject.hasOwnProperty(key)) {
      result[key] = 'added';
    }
  }
  return result;
};

export default genDiff;
