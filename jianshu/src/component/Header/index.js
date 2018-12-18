import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import  {actionCreators} from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {Link} from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'


class Header extends Component {

    getListArea(){

        const {focused,mouseIn,list,page,handleMouseChange,handleChangePage} = this.props;
        const pageList = [];
        const newList = list.toJS()
        if(newList.length){
            for(let i = page * 10;i<(page+1)*10;i++ ){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]} >{newList[i]}</SearchInfoItem>
                    )
                }
                
            }
        }

        if(focused || mouseIn){
            return (
                <SearchInfo 
                     onMouseEnter = {handleMouseChange}
                     onMouseLeave = {handleMouseChange}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe648;</i> 换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    

    render(){
        const {focused,handInputChange,list, login} = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? 
                        <NavItem onClick={this.props.logout} className="right">退出</NavItem> :
                        <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus = {()=>handInputChange(list)}
                                onBlur = {()=>handInputChange(list)}
                            ></NavSearch>
                        </CSSTransition>
                        <i className="iconfont iconSearch">&#xe688;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe603;</i>写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        //等价于state.getIn(['header','focused'])
        focused:state.get('header').get('focused'),
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handInputChange(list){
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchChange())
        },
        handleMouseChange(e){
            dispatch(actionCreators.mouseChange())
        },
        handleChangePage(spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            //在chrome浏览器上，快速click事件会触发mouseenter和mouseleave，属于bug
            dispatch(actionCreators.changePage())
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);