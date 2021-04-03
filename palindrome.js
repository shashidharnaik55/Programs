
    function checkPalindrome(str) {

        // reverse string
        const reverseString = string.split('').reverse().join('');
         if(string == reverseString) {
            document.write('It is a palindrome');
        }
        else {
            document.write('It is not a palindrome');
        }
    }
    
    //take input
    const string = prompt('Enter a string: ');
    
    checkPalindrome(string);
