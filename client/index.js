import { h, render, Component } from 'preact';
import App from './app';

import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './style.css';

class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Toolbar className="topappbar">
                    <Toolbar.Row>
                        <Toolbar.Section align-start>
                            <Toolbar.Icon navigation>menu</Toolbar.Icon>
                            <Toolbar.Title>Quizair</Toolbar.Title>
                        </Toolbar.Section>
                        <Toolbar.Section align-end>
                            <Toolbar.Icon>more_vert</Toolbar.Icon>
                        </Toolbar.Section>
                    </Toolbar.Row>
                </Toolbar>
                <App />
            </div>
        );
    }
}
render(<Index />, document.body);
