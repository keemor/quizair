import { h, render, Component } from 'preact';

import createStore from 'unistore';
import devtools from 'unistore/devtools';
import { Provider, connect } from 'unistore/preact';
import Toolbar from 'preact-material-components/Toolbar';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';

import App from './app';
import actions from './actions';

const initialState = {
    todos: [],
    message: ''
};

let store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';

import './style.css';
import 'preact/debug';

class Index extends Component {
    constructor() {
        super();
    }
    render({ todos, message, addTodo, getTodos, removeTodo, toggleTodo }) {
        if (message) {
            this.bar.MDComponent.show({
                message
            });
        }

        return (
            <div>
                <Toolbar className="topappbar">
                    <Toolbar.Row>
                        <Toolbar.Section align-start>
                            <Toolbar.Title>Quizair</Toolbar.Title>
                        </Toolbar.Section>
                    </Toolbar.Row>
                </Toolbar>
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
        <IndexConnected />
    </Provider>,
    document.body
);
