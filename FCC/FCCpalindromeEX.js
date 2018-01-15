//Free Code Camp Exercise w/ palindrome

//learned : REGEX, replace(), toLowerCase(),




function palindrome(str) {
  
  //remove all punctuation, spaces, and symbols w/ replace()
  
  /***ORIGINAL CODE 1.0 
  var strCheck = str.replace(/([^\w]*)/gi,"");
var noUnderscores = strCheck.replace(/_/gi,"");
   //turn everything lower case to check for palindromes
 var strCheckLower= noUnderscores.toLowerCase();
   //compare our unreversed,(w/ spexcial chars and pesky underscore removed) to reversed string
 if(strCheckLower===strCheckLower.split("").reverse().join(""))
  return true;
  else
    return false;
  ORIGINAL CODE 1.0 ENDED ***/
  
 
  // Good luck!

  var alphaNumericOnly = str.replace(/[\W_]/g,"");
  return alphaNumericOnly.toLowerCase() === alphaNumericOnly.split("").reverse().join("").toLowerCase();             
}



palindrome("A man, a plan, a canal. Panama");