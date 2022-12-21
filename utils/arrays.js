const findWhere = (array, findElement) => {
  const result = array.find((item) => {
    let isSame = true;
    for (const key of Object.keys(findElement)) {
      isSame = isSame && findElement[key] === item[key];
    }
    return isSame;
  });
  return result || null;
};

export default findWhere;
