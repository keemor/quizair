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

    async componentDidMount() {
        try {
            const response = await fetch('/todos');
            const data = await response.json();
            this.setState({ todos: data.todos });
        } catch (error) {
            console.error('Quizair:' + error);
        }
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
