
       function checkAnagrams(str1, str2){

     var newstr1 = str1.toLowerCase().split('').sort().join();
     var newstr2 = str2.toLowerCase().split('').sort().join();
     

      if(newstr1 == newstr2){
        console.log("String is Anagrams");
    }
      else{
     console.log("String is Not Anagrams");
    }

  }

     checkAnagrams("binary", "brainy");
     checkAnagrams("Indian", "nIndisn");

   