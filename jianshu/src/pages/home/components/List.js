import React,{PureComponent} from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent{
    render() {
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <Link to={'/detail/'+item.get("id")} key={index}>
                                <ListItem >
                                    <img className="pic" alt="" src={item.get("imgUrl")} />
                                    <ListInfo>
                                        <h3 className="title">{item.get("title")}</h3>
                                        <p className="desc">{item.get("desc")}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>this.props.getMoreList(this.props.page)}>加载更多</LoadMore>
            </div>
           
        )
    }
}

const mapDispatch = (dispatch)=>{
    return {
        getMoreList(page){
            let action = actionCreators.getMoreList(page);
            dispatch(action);
        }
    }
}


const mapStateToProps=(state)=>{
    return{
        list:state.getIn(["home","articleList"]),
        page:state.getIn(["home","articlePage"])
    }
}

export default connect(mapStateToProps,mapDispatch)(List);