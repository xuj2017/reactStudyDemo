import { fromJS  } from 'immutable';
import * as types from './actionTypes'

const defaultState =fromJS({
   topicList:[],
   articleList:[],
   recommentList:[],
   articlePage:1,
   showScroll:true
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case types.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case types.CHNAGE_HOME_LIST:
            return state.merge({
                articleList:state.get("articleList").concat(fromJS(action.data)),
                articlePage:fromJS(action.page)
            })
        case types.TOGGLE_SCROLL_TOP:
            return state.set("showScroll",action.show)
        default:
            return state
    }

}