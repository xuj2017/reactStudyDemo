import {add_todo_item,delete_todo_item,change_input_value} from './actionTypes'

export const getInputChange = (value)=>({
    type:change_input_value,
    value:value
})

export const addTodoItem =()=>({
    type:add_todo_item
})

export const deleteTodoItem = (value)=>({
    type:delete_todo_item,
    value:value
})