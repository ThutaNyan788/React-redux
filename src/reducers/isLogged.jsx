

export const isLoggedReducer = (state=false,action)=>{
    switch(action.type){
        case "LOGGED":
            return state = !state;

        case "NOT_LOGGED":
            return state = !state;

        default:
            return state;
    }
}