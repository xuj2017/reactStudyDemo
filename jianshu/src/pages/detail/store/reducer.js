import { fromJS  } from 'immutable';
import * as types from './actionTypes'

const defaultState =fromJS({
    title: '123',
	content: '456'
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case types.CHANGE_DETAIL_CONTENT:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            });
       
        default:
            return state
    }

}