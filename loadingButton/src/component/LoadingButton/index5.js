/** 
 * HOC
 *
 * @Author: xujun  
 * @Date: 2020-02-27 17:03:28   
 */

import React,{Component} from 'react';

function laodingButtonHoc(WrapperComponent,initState){
    return class extends Component{
        constructor(props){
            super(props);
            this.initState = initState ||{
                loading:false,
                btnText:'获取验证码',
                totalSecond:12
            }

            this.state = {...this.initState}
        }

        timer = null;
        componentWillUnmount(){
            this.clear();
        }
        clear(){
            clearTimeout(this.timer);
            this.setState({
                ...this.initState
            })
        }

        setTime(){

            const totalSecond = this.state.totalSecond;
    
            if(totalSecond <= 0){
                this.clear();
                return;
            }
            this.setState({
                totalSecond:totalSecond - 1
            })
    
            this.timer = setTimeout(()=>{
                this.setTime();
            },1000)
        }

        onFetch(){
            const loading = this.state.loading;
            if(loading) return;
    
            this.setState(()=>({
                loading:true
            }))
            this.setTime()
        }

        render(){
            const {loading,btnText,totalSecond} = this.state;
            return(
                <WrapperComponent 
                    {...this.props}
                    onClick = {this.onFetch.bind(this)}
                    loading = {loading}
                    btnText = {btnText}
                    totalSecond = {totalSecond}
                ></WrapperComponent>
            )
        }
    }
}


class LoadingButtonHocComponent extends Component {
    render(){
        const {loading,btnText,totalSecond,onClick} = this.props;

        return(
            <button disabled = {loading} onClick = {onClick}>
                 {!loading ? btnText : `请等待${totalSecond}秒..`}
            </button>
        )
    }
}

const LoadingButtonHocComponet1 = laodingButtonHoc(LoadingButtonHocComponent,{
    loading: false,
    btnText: '获取验证码Hoc1',
    totalSecond: 5
})

const LoadingButtonHocComponet2 = laodingButtonHoc(LoadingButtonHocComponent,{
    loading: false,
    btnText: '获取验证码Hoc2',
    totalSecond: 19
})

export default ()=>(
    <div>
        <LoadingButtonHocComponet1 />

        <LoadingButtonHocComponet2 />
    </div>
)