
        function findInArray(ar, val) {
    for (var i = 0,len = ar.length; i < len; i++) {
        if ( ar[i] === val ) { 
            return i;
        }
    }
    return -1;
}

// example array
var ar = ['Rudi', 'Morie', 'Halo', 'Miki', 'Mittens', 'Pumpkin'];
// test the function 
alert( findInArray(ar, 'Rudi') ); 
alert( findInArray(ar, 'Coco') );
   