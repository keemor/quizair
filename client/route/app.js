import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import TextField from 'preact-material-components/TextField';
import Dialog from 'preact-material-components/Dialog';

import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Button/style.css';

import Todo from '../component/todo';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.onRemove = this.onRemove.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            text: '',
            dialogMessage: '',
            _id2remove: ''
        };
    }

    componentDidMount() {
        const { getTodos } = this.props;
        getTodos();
    }

    onRemove(e) {
        e.preventDefault();
        const id = e.target.id;
        const todo2confirm = this.props.todos.filter(t => t._id === id);
        this.setState({ dialogMessage: todo2confirm[0].text, _id2remove: todo2confirm[0]._id });
        this.dialog.MDComponent.show();
    }

    onInput(e) {
        this.setState({ text: e.target.value });
    }

    onSubmit(text) {
        const { addTodo } = this.props;
        this.setState({ text: '' });
        addTodo(text);
    }
    render() {
        const { text, dialogMessage, _id2remove } = this.state;
        const { todos, removeTodo, toggleTodo } = this.props;
        return (
            <div>
                <form onSubmit={() => this.onSubmit(text)} action="javascript:">
                    <Card>
                        <TextField
                            autocomplete="off"
                            label="New To Do"
                            fullwidth="true"
                            value={text}
                            onInput={this.onInput}
                        />
                    </Card>
                </form>
                <Card>
                    <List>
                        {todos.map(todo => {
                            return <Todo todo={todo} onRemove={this.onRemove} onToggle={toggleTodo} />;
                        })}
                    </List>
                    {todos.length ? '' : 'Empty list or herokuapp.com is waking up from sleep mode. Wait few seconds!'}
                </Card>

                <Dialog
                    ref={dialog => {
                        this.dialog = dialog;
                    }}
                    onAccept={() => {
                        removeTodo(_id2remove);
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
            </div>
        );
    }
}
