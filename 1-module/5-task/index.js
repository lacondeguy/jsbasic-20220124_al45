function truncate(str, maxlength) {
  if (str.length > maxlength){
    let text = `${str.slice(0, (maxlength - 1))}…`;
    return text;
  } else {
    return str;
  }
}
