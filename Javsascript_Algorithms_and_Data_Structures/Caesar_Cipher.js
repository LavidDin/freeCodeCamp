function rot13(str) {
  var newStr = [];

  for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);

    if (char < 65 || char > 90) {
      newStr.push(str[i]);
    }
    else if (char < 78) {
      newStr.push(String.fromCharCode(char+13));
    }
    else {
      newStr.push(String.fromCharCode(char-13));
    }
  }
return newStr.join('');

}



rot13("SERR PBQR PNZC");