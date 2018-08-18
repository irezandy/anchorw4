function changeMe(arr) {
    // cek jika arr kosong
    if(arr.length < 1) {
      console.log('');
    }
  
    for(var i = 0; i < arr.length; i++) {
      var objArr = {};
      var age = 2018 - arr[i][3];
  
      // assign key firstName
      objArr.firstName = arr[i][0];
      // assign key lastName
      objArr.lastName = arr[i][1];
      // assign key gender
      objArr.gender = arr[i][2];
  
      // jika umur tidak valid console = 'Invalid Birth Year'
      if(!age || 2018 < arr[i][3]) {
        objArr.age = 'Invalid Birth Year';
      } else {
        objArr.age = age;
      }
      console.log(objArr);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([['Ihsan', 'Rezandy', 'Male', 1995]]);
  // { firstName: 'Ihsan',
  //   lastName: 'Rezandy',
  //   gender: 'Male',
  //   age: 23 }