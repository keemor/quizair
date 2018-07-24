import { h, render, Component } from 'preact';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

import 'preact-material-components/Card/style.css';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        fetch('/todos')
            .then(response => response.json())
            .then(data => this.setState({ todos: data.todos }));
    }

    render(props, { todos }) {
        return (
            <List>
                {todos.map((todo, idx) => {
                    return <List.Item key={idx}>{todo.text}</List.Item>;
                })}
            </List>
        );
    }
}
