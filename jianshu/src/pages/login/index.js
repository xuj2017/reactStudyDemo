import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends PureComponent{
    render(){
        if(!this.props.loginState){
            return(
                <LoginWrapper>
                        <LoginBox>
                            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                        </LoginBox>
                    </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
       
    }
}

const mapState = (state)=>({
    loginState:state.getIn(["login","login"])
})

const  mapDispatch = dispatch=>({
    login(account,password){
        dispatch(actionCreators.login(account.value, password.value))
    }
})

export default connect(mapState,mapDispatch)(Login)