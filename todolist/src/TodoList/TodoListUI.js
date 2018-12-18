import React,{Component} from 'react';

class TodoListUI extends Component{
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

export default TodoListUI;