import {add_todo_item,delete_todo_item,change_input_value} from './actionTypes'

const defaultState = {
    inputValue:'123123',
    list:['1','2','3']
}

//reducer 可以接受state但不能修改state
export default (state = defaultState,action)=>{
    if(action.type === change_input_value){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }

    if(action.type === add_todo_item){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }

    if(action.type === delete_todo_item){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }

    console.log(action)
    return state
}