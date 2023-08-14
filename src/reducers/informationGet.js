

const informationGet = (state = "", action) => {
 


    if(action.type === 'info'){
        const entry = localStorage.getItem("Entry")
        

       
        return [state = entry, console.log(state)]
      
    }
   
    else{
        return state;
    }
}

export default informationGet
