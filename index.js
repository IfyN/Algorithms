//Algorithm 7: Repeat a string

//Creating the javascript repeat() method

function repeatString(string, times) {
if (times <= 0) {
    return '';
  }
  
  let repeatedString = '';
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }
  return repeatedString;
}

console.log(repeatString("abc", 5));
//output: abcabcabcabcabc




