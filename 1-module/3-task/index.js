function ucFirst(str) {
  let text = str;
      if (str === ''){
      return ('');
      } else {
      text = text[0].toUpperCase() + text.substr(1, text.length);
      return text;
      }
}