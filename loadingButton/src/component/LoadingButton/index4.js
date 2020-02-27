/**
 * setTimeout+参数提取到props2
 */


import React,{Component} from 'react';


class LoadingButtonProps extends Component{

   
    timer = null;
    componentWillUnmount(){
        this.clear();
    }
    clear(){
        clearTimeout(this.timer);
        this.props.onReset();
    }

    setTime(){
        const totalSecond = this.props.totalSecond;
        if(totalSecond <=0){
            this.clear();
            return;
        }

        this.props.onTimeChange();

        this.timer = setTimeout(()=>{
            this.setTime();
        },1000)
    }

    onFetch(){
        if(this.props.loading) return;

        this.setTime();
        this.props.onStart();
    }

    render(){
        return <div onClick={this.onFetch.bind(this)}> {this.props.children} </div>
    }
}


class LoadingButton4 extends Component{
 
   totalSecond = 10;

    state= {
        loading:false,
        btnText:'获取验证码4.1',
        totalSecond:this.totalSecond
    }
   onTimeChange(){
       const { totalSecond } = this.state
        this.setState(() => ({ totalSecond: totalSecond - 1 }))
   }

   onReset(){
    this.setState({
        loading:false,
        totalSecond:this.totalSecond
    })
   }

   onStart(){
    this.setState(()=>({
        loading:true
    }))
   }

   render(){
    const { loading, btnText, totalSecond } = this.state
    return (
      <LoadingButtonProps
        loading={loading}
        totalSecond={totalSecond}
        onStart={this.onStart.bind(this)}
        onTimeChange={this.onTimeChange.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <button disabled={loading}>
          {!loading ? btnText : `请等待${totalSecond}秒..`}
        </button>
      </LoadingButtonProps>
    )
   }
}

export default LoadingButton4;