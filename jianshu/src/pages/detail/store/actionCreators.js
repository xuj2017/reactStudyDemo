import * as types from './actionTypes'
import axios from 'axios'

export const getDetailContent = (id)=>{
    return(dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            let result = res.data.data;
            dispatch({
                type:types.CHANGE_DETAIL_CONTENT,
                title:result.title,
                content:result.content
            })
        })
    }
}