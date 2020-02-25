/**
 * setTimeout
 */


import React,{Component} from 'react';

class LoadingButton2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading:false,
            btnText:'获取验证码2',
            totalSecond:10
        }
    }

    timer = null;

    componentWillUnmount(){
        this.clear()
    }

    clear(){
        clearTimeout(this.timer)
        this.setState({
            loading:false,
            totalSecond:10
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
        this.setState(()=>({
            loading:true
        }))
        this.setTime()
    }

    render(){
        const {loading,btnText,totalSecond} = this.state
        return(
            <div>
            <span>setTimeout：</span>
            <button disabled={loading} onClick={this.onFetch.bind(this)}>
                {!loading ? btnText : `请等待${totalSecond}秒..`}
            </button>
            </div>
            
        )
    }
}

export default LoadingButton2;