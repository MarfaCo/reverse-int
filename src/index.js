module.exports = function reverse (n) {
  n = Math.abs(n);
  let str = n.toString();
  let reverseStr = '';

  for (let i = (str.length -1 ); i >= 0; i--) {
    reverseStr += str[i];
  }

  return +reverseStr;
}
