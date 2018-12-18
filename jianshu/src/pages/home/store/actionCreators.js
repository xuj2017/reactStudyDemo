import * as types from './actionTypes';
import axios from 'axios';

const changHomeData = (result) => ({
	type: types.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});


export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            
            dispatch(changHomeData(result))
        })
    }
}

export const getMoreList = (page)=>{
    return (dispatch)=>{
          axios.get('/api/homeList.json?page='+ page).then(res=>{
              const result = res.data.data;
              dispatch({
                  type:types.CHNAGE_HOME_LIST,
                  data:result,
                  page:page + 1
              })
          })
    }
}

export const toggleTopShow = (show)=>({
    type: types.TOGGLE_SCROLL_TOP,
	show
})