function findLongestWord(str) {
  var arrayOfWords = str.split(" ");
  
  var longest;
  for(var i = 0 ; i < arrayOfWords.length;i++){
    
    if(arrayOfWords[i].length >arrayOfWords[i+1].length){
      longest = arrayOfWords[i];
    }
    else if(arrayOfWords[i].length <arrayOfWords[i+1].length){
      longest = arrayOfWords[i+1];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
