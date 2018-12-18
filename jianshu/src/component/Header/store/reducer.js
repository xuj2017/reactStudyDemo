import * as types  from './actionTypes'
import { fromJS  } from 'immutable';


const defaultState =fromJS({
    focused:false,
    mouseIn:false,
    list:[],//immutable类型
    page:0,
    totalPage:1
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case types.SEARCH_CNAGE:
            //返回一个全新的对象
            return   state.set('focused',!state.get('focused'));
        case types.CHANGE_LIST:
            return state.merge({
                'list':action.data,
                'totalPage':action.totalPage
            })
        case types.MOUSE_CHANGE:
            return state.set('mouseIn',!state.get('mouseIn'))
        case types.CHANGE_PAGE:
            return state.set('page',state.get('page')+1<state.get('totalPage') ? state.get('page')+1 : 0)
        default:
            return state
    }

}