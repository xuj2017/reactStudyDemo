import React,{Component,Fragment} from 'react'
import TodoItem from '../TodoItem/TodoItem'
import Test from '../Test/Test'
import store from '../store/index';
import {getInputChange,addTodoItem,deleteTodoItem} from '../store/actionCreators';
import TodoListUI from './TodoListUI';
import './TodoList.css'

class TodoList extends Component{

    constructor(props){
        super(props)
        //当组件的state 和 props发生改变的时候，render函数就会重新执行
        this.state=store.getState()
        this.handleBtnClick= this.handleBtnClick.bind(this)
        this.handInputChange = this.handInputChange.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleStoreChange =this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    handInputChange(e){
        store.dispatch(getInputChange(e.target.value))
    }

    handleBtnClick(e){

        store.dispatch(addTodoItem())
      
        // this.setState((prevState)=>({
        //     list:[...prevState.list,prevState.inputValue],
        //     inputValue:""
        // }))
    }

    handleItemDelete(index){
    
        store.dispatch(deleteTodoItem(index))

        // this.setState( (prevState)=>{
        //     const list = [...prevState.list];
        //     list.splice(index,1)
        //     return {
        //         list:list
        //     }
        // })
        
    }

    getTodoItem(){
      return  this.state.list.map((item,index)=>{
            return(
                    <TodoItem 
                        key={item}
                        index={index} 
                        content={item}
                        handleItemDelete = {this.handleItemDelete}
                    />
            ) 
        })
    }

    render(){
        return (
            <Fragment>
                {/* 这是注释 */}
                <div>
                    <label htmlFor="input">输入内容</label>
                    <input
                        id="input"
                        className="input"  
                        onChange={this.handInputChange} 
                        value={this.state.inputValue}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>

                <Test content={this.state.inputValue} />
            </Fragment>
            
        )
    }
}

export default TodoList;