/**
 * setTimeout+参数提取到props
 */


import React,{Component} from 'react';

class LoadingButton3 extends Component{
    constructor(props){
        super(props);

        this.initState = {
            loading:false,
            btnText:this.props.btnText || "获取验证码3",
            totalSecond:this.props.totalSecond || 60
        }
        this.state = {...this.initState};
    }

    timer = null;

    componentWillUnmount(){
        this.clear()
    }

    clear(){
        clearTimeout(this.timer)
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
        const {loading,btnText,totalSecond} = this.state
        return(
            <div>
                <button disabled={loading} onClick={this.onFetch.bind(this)}>
                    {!loading ? btnText : `请等待${totalSecond}秒..`}
                </button>
            </div>
            
        )
    }
}

export default LoadingButton3;