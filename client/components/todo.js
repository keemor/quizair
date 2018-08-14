import { h, render, Component } from 'preact';
import List from 'preact-material-components/List';
import Icon from 'preact-material-components/Icon';

export default class Todo extends Component {
    render({ todo, onRemove, onDone }) {
        return (
            <List.Item key={todo._id}>
                <Icon id={todo._id} onclick={onRemove} className="hand" title="Remove">
                    delete_outline
                </Icon>
                <Icon
                    id={todo._id}
                    onclick={onDone}
                    className="hand"
                    title={todo.completed ? 'Mark Undone' : 'Mark Done'}
                >
                    {todo.completed ? 'check_box' : 'check_box_outline_blank'}
                </Icon>
                <div
                    id={todo._id}
                    onclick={onDone}
                    className="hand"
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                >
                    {todo.text}
                </div>
            </List.Item>
        );
    }
}
