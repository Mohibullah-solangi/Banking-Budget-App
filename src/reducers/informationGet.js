

const informationGet = (state ="", action) => {
 


    if(action.type === 'name'){
        const entry = localStorage.getItem("Entry")
        let Info = JSON.parse(entry)

        let Name = Info.Firstname;
        return [state = Name, console.log(state)]
      
    }
    else{
        return state;
    }
}

export default informationGet
