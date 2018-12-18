import * as types  from './actionTypes'
import axios from 'axios';
import {fromJS} from 'immutable';


const changeList = (data)=>({
    type:types.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const searchChange = ()=>({
    type:types.SEARCH_CNAGE
})

export const getList = ()=>{
    //redux-thunk可以让action成为一个函数
    return (dispatch)=>{
        axios.get('/api/headerList.json').then(res=>{
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const mouseChange= ()=>({
    type:types.MOUSE_CHANGE
})

export const changePage = ()=>({
    type:types.CHANGE_PAGE
})