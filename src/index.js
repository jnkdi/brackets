module.exports = function check(str, bracketsConfig) {
  let templates = [];

  for (item of bracketsConfig) {
    let tmpl = item.join('');

    templates.push(tmpl);
  }

  let input = str;

  for (let i = 0; i < str.length / 2; i++) {
    let length = input.length;
  
    for (item of templates) {
      input = input.replace(item, '');
    }

    if (length == input.length || length == 0) break;
  }

  return input.length == 0;
}
