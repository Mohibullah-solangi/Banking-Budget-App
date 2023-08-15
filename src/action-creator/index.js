

export const deposit = (money) => {
  return (
    {
       type: 'deposit',
       payload: money
    }
  )
}

export const withdraw = (money) => {
    return (
      {
         type: 'withdraw',
         payload: money
      }
    )
  }

  export const send = (money) => {
    return (
      {
         type: 'send',
         payload: money
      }
    )
  }


export const friend = (name, email)=>{
   
  let obj = {}
  obj.Name = name;
  obj.Email = email;

  return(
    {
      type: 'friend',
      payload: obj
      
    }
  )
}



export const expense = (name, Amount)=>{
   
  let obj = {}
  obj.Name = name;
  obj.Amount = Amount;

  return(
    {
      type: 'expense',
      payload: obj
      
    }
  )
}
