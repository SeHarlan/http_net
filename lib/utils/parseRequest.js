module.exports = rawRequest => {

  const pattern = /(?<method>[A-Z]+)\s(?<path>.\S*)/;
  const [, body] = rawRequest.split('\r\n\r\n');
  const obj = { ...rawRequest.match(pattern).groups, body };

  return obj;
};
