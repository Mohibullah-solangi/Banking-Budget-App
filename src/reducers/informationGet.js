

const informationGet = (state = "", action) => {
 


    if(action.type === 'friend'){
        
       localStorage.setItem("Friend", JSON.stringify(action.payload));
      
       let user = localStorage.getItem("Friend")
            let friend = JSON.parse(user)
       state = friend.Name 

       
        return [ state, console.log("friend added")]
      
    }
   
    else{
        return state;
    }
}

export default informationGet
