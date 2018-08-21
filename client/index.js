import { h, render, Component } from 'preact';
import Router from 'preact-router';
import { createHashHistory } from 'history';

import createStore from 'unistore';
import devtools from 'unistore/devtools';
import { Provider, connect } from 'unistore/preact';
import actions from './store/actions';

import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './style.css';

import App from './route/app';
import About from './route/about';
import Layout from './component/layout';

import 'preact/debug';

const initialState = {
    todos: [],
    message: ''
};

const store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

class Index extends Component {
    render({ todos, message, addTodo, getTodos, removeTodo, toggleTodo }) {
        if (message) {
            this.bar.MDComponent.show({
                message
            });
        }

        return (
            <div>
                <App {...{ todos, addTodo, getTodos, removeTodo, toggleTodo }} />
                <Snackbar
                    ref={bar => {
                        this.bar = bar;
                    }}
                />
            </div>
        );
    }
}

const IndexConnected = connect(
    Object.keys(initialState),
    actions
)(Index);

render(
    <Provider store={store}>
        <Router history={createHashHistory()}>
            <Layout component={IndexConnected} path="/" />
            <Layout component={About} path="/about" />
        </Router>
    </Provider>,
    document.body
);
