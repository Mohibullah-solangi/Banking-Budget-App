

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
export const name = ()=>{

  return(
    {
      type: 'name',
      
    }
  )
}