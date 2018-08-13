import { h, render, Component } from 'preact';
import List from 'preact-material-components/List';
import TextField from 'preact-material-components/TextField';
import Icon from 'preact-material-components/Icon';

import 'preact-material-components/List/style.css';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/TextField/style.css';

export default class Hello extends Component {
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

        try {
            const response = await fetch(`/todo/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();

            console.log('data: ', data);

            const newState = this.state.todos.filter(t => t._id !== id);
            this.setState({ todos: newState });
        } catch (error) {
            console.error(error);
        }
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
            const newState = [...this.state.todos, newTodo];
            this.setState({ todos: newState, text: '' });
        } catch (error) {
            console.error(error);
        }
    }
    async done(e) {
        e.preventDefault();
        const id = e.target.id;

        const toggleTodo = this.state.todos.map(t => {
            if (t._id !== id) {
                return t;
            }
            t.completed = !t.completed;
            return t;
        });

        this.setState({ todos: toggleTodo });
    }
    update(e) {
        this.setState({ text: e.target.value });
    }

    render(props, { todos, text }) {
        return (
            <div>
                <form onSubmit={this.add} action="javascript:">
                    <TextField autocomplete="off" label="New To Do" value={text} onInput={this.update} outlined />
                </form>
                <List>
                    {todos.map((todo, idx) => {
                        return (
                            <List.Item key={idx}>
                                <Icon id={todo._id} onclick={this.remove} className="hand" title="Delete">
                                    delete_outline
                                </Icon>
                                <Icon id={todo._id} onclick={this.done} className="hand" title="">
                                    {todo.completed ? 'check_box' : 'check_box_outline_blank'}
                                </Icon>
                                <div
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                    }}
                                >
                                    {todo.text}
                                </div>
                            </List.Item>
                        );
                    })}
                </List>
            </div>
        );
    }
}
