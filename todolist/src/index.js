import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import TodoList from './NewTodoList/TodoList';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

const App = (
    <Provider store= {store}>
        <TodoList />
    </Provider>
)


ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
