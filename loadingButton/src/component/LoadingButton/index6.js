/** 
 * renderProps
 *
 * @Author: xujun  
 * @Date: 2020-02-27 17:13:33   
 */
import React,{Component} from 'react'

class LoadingButtonRenderProps extends Component{
    constructor(props){
        super(props)

        this.initState = {
            loading:false,
            btnText: this.props.btnText || '获取验证码',
            totalSecond: this.props.totalSecond || 60
        }

        this.state = { ...this.initState}
    }

    timer = null
    componentWillUnmount() {
        this.clear()
    }

    clear = () => {
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
        const { loading, btnText, totalSecond } = this.state
        return  this.props.children({
            onClick:this.onFetch.bind(this),
            loading: loading,
            btnText: btnText,
            totalSecond: totalSecond
        })
    }
}


class LoadingButtonRenderProps1 extends Component{
    render(){
        return(
            <LoadingButtonRenderProps btnText = {'获取验证码6.1'} totalSecond={12}>
                {
                    ({onClick,loading,btnText,totalSecond})=>(
                        <button disabled={loading} onClick={onClick}>
                            {!loading ? btnText : `请等待${totalSecond}秒..`}
                        </button>
                    )
                }
            </LoadingButtonRenderProps>
        )
    }
}

class LoadingButtonRenderProps2 extends Component{
    render(){
        return(
            <LoadingButtonRenderProps btnText = {'获取验证码6.1'} totalSecond={8}>
                {
                    ({onClick,loading,btnText,totalSecond})=>(
                        <button disabled={loading} onClick={onClick}>
                            {!loading ? btnText : `请等待${totalSecond}秒..`}
                        </button>
                    )
                }
            </LoadingButtonRenderProps>
        )
    }
}

export default ()=>(
    <div>
        <LoadingButtonRenderProps1 />
        <LoadingButtonRenderProps2 />
    </div>
)