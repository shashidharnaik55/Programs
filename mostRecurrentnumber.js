
var arr1=[1,2,3,4,3];
var m = 1; 
var n = 0; 
var item;
for (var i=0; i<arr1.length; i++){
        for (var j=i; j<arr1.length; j++) {
                if (arr1[i] == arr1[j])
                 n++;
                if (m<n)
                {
                  m=n; 
                  item = arr1[i]; // more recurrent item
                }
        }
        n=0;
}
console.log(item+" ( " +m+" times ) ") ;