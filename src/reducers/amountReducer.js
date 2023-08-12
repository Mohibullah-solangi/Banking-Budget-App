// import React from 'react'

const amountReducer = (state =0 , action) => {
 
    
    if (action.type==='deposit'){
      return [state + action.payload, console.log("deposit")]
           
    }
    else if (action.type==='withdraw'){
      return [state - action.payload, console.log("withdraw")]
    }
    else {
      return [state, console.log("initial Value")]; 
    }
  
}

export default amountReducer
