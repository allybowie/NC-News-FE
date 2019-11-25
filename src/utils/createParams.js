const createParams = (uri, search) => {
  const pathConcat = uri + search;

  const fullPath = pathConcat.replace(" ", "");

  if (fullPath.length === 0) return {};

  const pathArray = fullPath.split("/");

  const query = pathArray[pathArray.length - 1];

  let params = {};

  let queryArray = query.split("?");

  let querySplit = queryArray.map(element => {
    return element.split("&&");
  });

  const queryStructure = [querySplit[0]];

  if (querySplit[1]) {
    querySplit[1].forEach(element => {
      queryStructure.push(element);
    });
  }

  const flatQuery = queryStructure.flat();

  let finalQueryArray = flatQuery.map(element => {
    return element.split("=");
  });

  finalQueryArray.forEach(element => {
    if (element.length === 1) {
      params.topic = element[0];
    } else {
      params[element[0]] = element[1];
    }
  });
  return params;
};

export default createParams;
