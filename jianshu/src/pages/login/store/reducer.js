import { fromJS  } from 'immutable';
import * as types from './actionTypes'

const defaultState =fromJS({
    login: false
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case types.CHANGE_LOGIN:
            return state.merge({
                login: fromJS(action.value)
            });

        default:
            return state
    }

}