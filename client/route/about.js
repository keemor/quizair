import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';

import Icon from 'preact-material-components/Icon';

export default class About extends Component {
    render() {
        return (
            <div>
                <p>
                    <a href="https://github.com/keemor/quizair">https://github.com/keemor/quizair</a>
                </p>

                <Icon>
                    <Link href="/">home</Link>
                </Icon>
            </div>
        );
    }
}
