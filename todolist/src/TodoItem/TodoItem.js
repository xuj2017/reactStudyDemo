import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        const { handleItemDelete, index } = this.props;

        if (handleItemDelete) {
            handleItemDelete(index)
        }
    }
 
    //防止子组件不必要渲染
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() {
        const { content,test } = this.props
        return (
            <div
                onClick={this.handleDelete}>{test}-{content}</div>
        )
    }
}

TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    handleItemDelete:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps = {
    test:'hello world'
}

export default TodoItem