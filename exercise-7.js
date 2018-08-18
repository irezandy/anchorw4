function digitPerkalianMinimum(angka) {
    var hasilBagi, arr = [], arrString = '', hasil = 0;
    
    for (var i = 1; i <= angka; i++) {
      hasilBagi = angka / i;
      arrString = i.toString() + hasilBagi.toString();
      
      
      if (hasilBagi % 1 === 0) {
        arr.push(arrString);
        
        if (hasil === 0) {
          hasil = arrString.length;
        } else {
          if (hasil > arrString.length) {
            hasil = arrString.length;
          }
        }
      }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  
  
  