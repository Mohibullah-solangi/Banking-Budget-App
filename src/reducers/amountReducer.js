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

      const Info = localStorage.getItem("Entry");
      const info = JSON.parse(Info);
      let amount = parseInt(info.InitialDeposit);
      let Action = parseInt(action.payload);

      localStorage.setItem("Friend", JSON.stringify(action.payload));
      
       let user = localStorage.getItem("Friend")
            let friend = JSON.parse(user)
      let  naame = friend.Name 
      
       if(Action<=amount && naame !== ""){
        state = amount - Action;
        const Balance = {...info, InitialDeposit: state}

         localStorage.setItem("Entry", JSON.stringify(Balance));
        
      }
      else if(naame === ""){
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
      let expense = action.payload.Amount;
      let Action = parseInt(expense);
      let name = action.payload.name;
      
       if(Action<=Amount){
        state = Amount - Action;
        const Balance = {...info, InitialDeposit: state}

         localStorage.setItem("Entry", JSON.stringify(Balance));
         localStorage.setItem("Expense", JSON.stringify(action.payload));


        let record = document.getElementById('expense');
        
        console.log("entered")

        const div2 = ()=>{
            return(
              ` <div className="row" id="expenses">
              <div className="col-6 col-md-8 fw-bold">${name}</div>
              <div className="col-3 col-md-2 fw-bold">PKR ${expense}</div>
            </div>`
            )
        }
       
      record.append(div2);

      return [console.log("expense recorded")];
    }
  }

    else {
      return [state, console.log("initial Value")]; 
    }
  
}

export default amountReducer
