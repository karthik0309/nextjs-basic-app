import {ActionType,State} from './Types'

const Reducer=(state:State,Action:ActionType)=>{
    switch(Action.type){
        case 'SET_DATA':
            if(state.keywords.length>=3){
                return state;
            }
            return {...state,keywords:[...state.keywords,Action.payload]}
        case 'DELETE_DATA':
            let updatedState=[...state.keywords]
            updatedState.map((ele,index)=>{
                if(ele===Action.payload){
                    updatedState.splice(index,1)
                    return;
                }
            })
            return {...state,keywords:[...updatedState]}
        default :
            return state
    }
}

export default Reducer


