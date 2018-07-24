import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';

import 'preact-material-components/Card/style.css';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state.todos = [];
    }

    componentDidMount() {
        fetch('/todos')
            .then(response => response.json())
            .then(data => this.setState(data));
    }

    render(props, state) {
        return (
            <Card>
                {state.todos.map((todo, idx) => {
                    return (
                        <div key={idx}>
                            <div>{todo.text}</div>
                        </div>
                    );
                })}
            </Card>
        );
    }
}
