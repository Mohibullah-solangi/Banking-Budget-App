

const informationGet = (state = "", action) => {
 


    if(action.type === 'friend'){
        
        const Info = localStorage.getItem("Entry");
        const info = JSON.parse(Info);
        let Friends = [...info.Friend, action.payload]
        const Balance = {...info, Friend: Friends}

       
        localStorage.setItem("Entry", JSON.stringify(Balance));
       
      
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
