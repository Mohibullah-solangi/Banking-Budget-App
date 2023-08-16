

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

      const Info = localStorage.getItem("Entry");
      const info = JSON.parse(Info);
      let amount = parseInt(info.InitialDeposit);
      let Action = parseInt(action.payload);

     
      
       let user = localStorage.getItem("Entry")
            let friend = JSON.parse(user)
      let  naame = friend.Friend 
      console.log(naame)
      
       if((Action<=amount) && (naame.length>0)){
        state = amount - Action;
        const Balance = {...info, InitialDeposit: state}

         localStorage.setItem("Entry", JSON.stringify(Balance));
        
      }
      else if(naame.length >= 0){
          alert("Kindly Add User as Friend")
      }
      else{
           alert("Insuficiant Balance");
      }
      return [state - action.payload, console.log("send")]
    }



    else if(action.type === 'expense'){

       
      const Info = localStorage.getItem("Entry");
      const info = JSON.parse(Info);
      let Amount = parseInt(info.InitialDeposit);
     
      let exp = [...info.Expenses, action.payload]
      let expense = action.payload.Amount;
      let Action = parseInt(expense);
     
      
       if(Action<=Amount && Amount>0){
        state = Amount - Action;
        const Balance = {...info, InitialDeposit: state, Expenses: exp}

       
         localStorage.setItem("Entry", JSON.stringify(Balance));
         localStorage.setItem("Expense", JSON.stringify(action.payload));



      return [console.log("expense")];
    }
  }




  

  else if(action.type === 'rem'){

       
    const Info = localStorage.getItem("Entry");
    const info = JSON.parse(Info);
    
   
    let exp = [...info.Expenses]
   
    // let expense = action.payload.Amount;
    // let Action = parseInt(expense);
   
    
    //  if(Action<=Amount && Amount>0){
    //   state = Amount - Action;
    //   const Balance = {...info, InitialDeposit: state, Expenses: exp}

     
    //    localStorage.setItem("Entry", JSON.stringify(Balance));
    //    localStorage.setItem("Expense", JSON.stringify(action.payload));



    return [console.log("expense")];
  // }
}
    else {
      return [state, console.log("initial Value")]; 
    }
  
}

export default amountReducer
