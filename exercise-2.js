function fpb(angka1, angka2) {
    var res = 0;
    var arr1 = [];
    var arr2 = [];
    var find = false;
    
    // faktor persekutuan angka1
    for (var i = 1; i <= angka1; i++) {
      for (var j = angka1; j > 0; j--) {
        if (i * j === angka1) {
          arr1.push(i)
          break;
        }
      }
    }
    
    // faktor persekutuan angka2
    for (var k = 1; k <= angka2; k++) {
      for (var l = angka2; l > 0; l--) {
        if (k * l === angka2) {
          arr2.push(k)
          break;
        }
      }
    }
    
    // fpb
    for (var a = arr1.length-1; a >= 0; a--) {
      for (var b = arr2.length-1; b >= 0; b--) {
        if (arr1[a] === arr2[b]) {
          find = true;
          return arr1[a];
        }
      }
      if (find){
         break; 
      }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1