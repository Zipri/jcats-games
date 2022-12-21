const bqs = (queryObject) => {
  const queryArray = [];
  for (const [key, value] of Object.entries(queryObject)) {
    queryArray.push(`${key}=${value}`);
  }
  return queryArray.sort((a, b) => a.localeCompare(b)).join('&');
};

export default bqs;
