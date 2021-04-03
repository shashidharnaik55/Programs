
function LetterChanges(text) {
var s = text.split('');
for (var i = 0; i < s.length; i++) {

switch(s[i]) {
case ' ': // checks for spaces
break;
case 'z':
s[i] = 'a'; //checks for "z" and sets to "a"
break;
case 'Z': 
s[i] = 'A'; //checks for "Z" and sets to "A"
break;
default:
s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
}//converts letter to the next letter in the alphabet

}
return s.join('');
}
var str = prompt("Please enter some text: ")
document.write(LetterChanges(str));
 