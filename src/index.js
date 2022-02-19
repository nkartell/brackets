module.exports = function check(str, bracketsConfig) {

  let stack = [];

  bracketsConfig.forEach(el => stack.push(el.join(''))); //['()', '[]', '{}']

  let i = 0;

  while (i < stack.length) {
    if (str.includes(stack[i])) {     //'([{}])'.includes('{}') true
      str = str.replace(stack[i], '');    // '([{}])'=> '([])'
      i = 0;
    }
    else {
      i++;
    }

  }
  return str.length === 0;
}
