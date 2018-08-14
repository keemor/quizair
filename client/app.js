import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import TextField from 'preact-material-components/TextField';
import Dialog from 'preact-material-components/Dialog';
import Snackbar from 'preact-material-components/Snackbar';

import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Snackbar/style.css';

import Todo from './components/todo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.confirmRemove = this.confirmRemove.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.done = this.done.bind(this);

        this.state = {
            todos: [],
            text: '',
            dialogMessage: '',
            _id2remove: ''
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

    showMessage(message) {
        this.bar.MDComponent.show({
            message
        });
    }

    update(e) {
        this.setState({ text: e.target.value });
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
            const data = await response.json();
            const todos = [data, ...this.state.todos];
            this.setState({ todos, text: '' });

            this.showMessage(`${text} saved!`);
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
            const data = await response.json();

            const todos = this.state.todos.map(t => {
                if (t._id !== id) {
                    return t;
                }
                t.completed = completed;
                return t;
            });
            this.setState({ todos });

            const text = data.text;
            this.showMessage(`${text} marked ${completed ? 'done' : 'undone'}!`);
        } catch (error) {
            console.error(error);
        }
    }
    confirmRemove(e) {
        e.preventDefault();
        const id = e.target.id;
        const todo2confirm = this.state.todos.filter(t => t._id === id);
        this.setState({ dialogMessage: todo2confirm[0].text, _id2remove: todo2confirm[0]._id });
        this.dialog.MDComponent.show();
    }

    async remove() {
        const id = this.state._id2remove;

        try {
            const response = await fetch(`/todo/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();

            const todos = this.state.todos.filter(t => t._id !== id);
            this.setState({ todos });

            const text = data.text;
            this.showMessage(`${text} removed!`);
        } catch (error) {
            console.error(error);
        }
    }
    render(props, { todos, text, dialogMessage }) {
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
                            return <Todo todo={todo} onRemove={this.confirmRemove} onDone={this.done} />;
                        })}
                    </List>
                </Card>

                <Dialog
                    ref={dialog => {
                        this.dialog = dialog;
                    }}
                    onAccept={() => {
                        this.remove();
                    }}
                    onCancel={() => {}}
                    dialogMessage={dialogMessage}
                >
                    <Dialog.Header>Remove</Dialog.Header>
                    <Dialog.Body>Remove {dialogMessage}?</Dialog.Body>
                    <Dialog.Footer>
                        <Dialog.FooterButton cancel={true}>Cancel</Dialog.FooterButton>
                        <Dialog.FooterButton accept={true}>Remove</Dialog.FooterButton>
                    </Dialog.Footer>
                </Dialog>
                <Snackbar
                    ref={bar => {
                        this.bar = bar;
                    }}
                />
            </div>
        );
    }
}
