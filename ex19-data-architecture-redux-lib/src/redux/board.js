const initState={
    boards:[
        {no:1, name:'same', age:20},
        {no:1, name:'same', age:20},
        {no:1, name:'same', age:20},
    ]
}

function boardReducer(state= initState, action){
    switch(action.type){
        case 'addBoard':
            return {...state, boards:[...state.boards, action.payload]}
        
        default:
            return state
    }
}
export default boardReducer