
var txt = prompt("Please enter some text: ");
var newTxt = "";

for (var i = 0; i<txt.length; i++){
  if (txt.charAt(i)=== " "){
    newTxt = newTxt.concat(" ");//checks for spaces
  }else if (txt.charAt(i) === "z"){
    newTxt = newTxt.concat("a");//checks for "z" and sets to "a"
  }
  else if (txt.charAt(i) === "Z"){
    newTxt = newTxt.concat("A");//checks for "Z" and sets to "A"
  }else{
    newTxt = newTxt.concat(String.fromCharCode(txt.charAt(i).charCodeAt(0)+1));
  }//converts letter to the next letter in the alphabet
}
document.write(newTxt);

   