import axios from 'axios';
import * as types from './actionTypes'

export const logout = ()=>({
        type: types.CHANGE_LOGIN,
        value: false
})

export const login = (account,password) =>{
    return (dispatch)=>{
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch({
                    type: types.CHANGE_LOGIN,
                    value: true
                })
			}else {
				alert('登陆失败')
			}
		})
    }
}