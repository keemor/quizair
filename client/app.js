import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import TextField from 'preact-material-components/TextField';

import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';

import Todo from './components/todo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.done = this.done.bind(this);

        this.state = {
            todos: [],
            text: ''
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('/todos');
            const data = await response.json();
            this.setState({ todos: data.todos });
        } catch (error) {
            console.error(error);
        }
    }

    async remove(e) {
        e.preventDefault();
        const id = e.target.id;

        // try {
        //     const response = await fetch(`/todo/${id}`, {
        //         method: 'DELETE'
        //     });
        //     const data = await response.json();

        //     console.log('data: ', data);

        //     const newState = this.state.todos.filter(t => t._id !== id);
        //     this.setState({ todos: newState });
        // } catch (error) {
        //     console.error(error);
        // }
    }

    async add(e) {
        e.preventDefault();

        try {
            const text = this.state.text;
            const response = await fetch(`/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            });
            const newTodo = await response.json();
            const newState = [newTodo, ...this.state.todos];
            this.setState({ todos: newState, text: '' });
        } catch (error) {
            console.error(error);
        }
    }
    async done(e) {
        e.preventDefault();
        const id = e.target.id;

        try {
            const todo = this.state.todos.filter(t => t._id === id);

            const completed = !todo[0].completed;

            const response = await fetch(`/todo/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed
                })
            });
            const doneTodo = await response.json();
            console.log('doneTodo: ', doneTodo);

            const toggleTodo = this.state.todos.map(t => {
                if (t._id !== id) {
                    return t;
                }
                t.completed = completed;
                return t;
            });

            this.setState({ todos: toggleTodo });
        } catch (error) {
            console.error(error);
        }
    }
    update(e) {
        this.setState({ text: e.target.value });
    }

    render(props, { todos, text }) {
        return (
            <div>
                <form onSubmit={this.add} action="javascript:">
                    <Card>
                        <TextField
                            autocomplete="off"
                            label="New To Do"
                            fullwidth="true"
                            value={text}
                            onInput={this.update}
                        />
                    </Card>
                </form>
                <Card>
                    <List>
                        {todos.map(todo => {
                            return <Todo todo={todo} onRemove={this.remove} onDone={this.done} />;
                        })}
                    </List>
                </Card>
            </div>
        );
    }
}
