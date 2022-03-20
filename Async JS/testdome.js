function createCheckDigit(membershipId) {
    // Write the code that goes here.
    let sum = { value: 0};
   
    
    for(let i=0; i<membershipId.length; i++){
      num = new Number(membershipId[i])
      sum.value += num; 
    }
    
    secNum = new String(sum.value);
   sum.value = 0;
    if(secNum.length === 2){
      
      for(let i=0; i<secNum.length; i++){
      thirdNum = new Number(secNum[i]);
        sum.value += thirdNum;
      }
    }
    return sum.value;
    
  }
  
  console.log(createCheckDigit("55556"));