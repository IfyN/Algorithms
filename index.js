// // Return the length of the longest word in the provided sentence. Response should be a number.

function findLongestWordLength(str) {
let wordsArray = str.split(' ');
  let currentLongestWord = "";

  for ( let i = 0; i < wordsArray.length; i++ ){
     let currentWord = wordsArray[i]
   if( currentWord.length > currentLongestWord.length ){
     currentLongestWord = currentWord;
   }
  }

return currentLongestWord.length;
}
  findLongestWordLength("Ifeoma is very beautiful woman");
 //console.log (findLongestWordLength("Javascript is a high-level language"))





