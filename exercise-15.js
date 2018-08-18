function changeVocals (str) {
    var changeWord = ''
    for(let i = 0; i < str.length; i++){
      
      if(str[i] === 'a'){
        changeWord += 'b'
      } else if(str[i] === 'i'){
        changeWord += 'j'
      } else if(str[i] === 'u'){
        changeWord += 'v'
      } else if(str[i] === 'e'){
        changeWord += 'f'
      } else if(str[i] === 'o'){
        changeWord += 'p'
      } else if(str[i] === 'A'){
        changeWord += 'B'
      } else if(str[i] === 'I'){
        changeWord += 'J'
      } else if(str[i] === 'U'){
        changeWord += 'V'
      } else if(str[i] === 'e'){
        changeWord += 'F'
      } else if(str[i] === 'O'){
        changeWord += 'P'
      } else {
        changeWord += str[i]
      }
    }
    return changeWord
  }
  
  function reverseWord (str) {
    var reverseWord = ''
    for(let j = str.length-1; j >= 0; j--) {
      reverseWord += str[j]
    }
    return reverseWord
  }
  
  function setLowerUpperCase (str) {
    var lowerUpper = ''
    for(let k = 0; k < str.length; k++){
      if(str[k] === str[k].toLowerCase()){
        lowerUpper += str[k].toUpperCase()
      } else {
        lowerUpper += str[k].toLowerCase()
      }
    }
    return lowerUpper
  }
  
  function removeSpaces (str) {
    var space = ''
    for(let l = 0; l < str.length; l++){
      if(str[l] === " "){
        str[l] = ''
      } else {
        space += str[l]
      }
    }
    return space
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    
    var param1 = changeVocals(name)
    var param2 = reverseWord(param1)
    var param3 = setLowerUpperCase(param2)
    var param4 = removeSpaces(param3)
    return param4
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'