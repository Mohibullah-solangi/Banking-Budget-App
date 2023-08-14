// import React from 'react'

const amountReducer = (state =0 , action) => {
 
    
    if (action.type==='deposit'){

      const Info = localStorage.getItem("Entry");
      const info = JSON.parse(Info);
      let Amount = parseInt(info.InitialDeposit);
      let Action = parseInt(action.payload);
      
      
      state = Amount + Action;
      const Balance = {...info, InitialDeposit: state}

      localStorage.setItem("Entry", JSON.stringify(Balance));


      return [console.log("deposit")]
           
    }
    else if (action.type==='withdraw'){

      const Info = localStorage.getItem("Entry");
      const info = JSON.parse(Info);
      let Amount = parseInt(info.InitialDeposit);
      let Action = parseInt(action.payload);
      
       if(Action<=Amount){
        state = Amount - Action;
        const Balance = {...info, InitialDeposit: state}

         localStorage.setItem("Entry", JSON.stringify(Balance));
        
      }
      else{
           alert("Insuficiant Balance");
      }
    return [console.log("withdraw")]
      
    }
    else if (action.type==='send'){
      return [state - action.payload, console.log("send")]
    }
    else {
      return [state, console.log("initial Value")]; 
    }
  
}

export default amountReducer
