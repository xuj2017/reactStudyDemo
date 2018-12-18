import React,{PureComponent} from 'react'
import {connect} from 'react-redux';
import List from './components/List'
import Recomment from './components/Recomment'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { actionCreators } from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent{

    handleScrollTop(){
        window.scrollTo(0,0)
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt='' src="//upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight> 
                    <Recomment/>
                    <Writer/>
                </HomeRight>

               {
                   this.props.showScorll  && <BackTop onClick={this.handleScrollTop}>回到<br />顶部</BackTop> 
               } 
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
    }

    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScroll);
	}

    bindEvents(){
        window.addEventListener("scroll",this.props.changeScroll)
    }
}

const mapState = (state)=>({
    showScorll:state.getIn(["home","showScroll"])
})


const mapDispatch = (dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScroll(){
        if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
    }
}) 

export default connect(mapState,mapDispatch)(Home) ;