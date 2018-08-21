import { h, render, Component } from 'preact';

import Header from '../component/header';

export default class Layout extends Component {
    render(props) {
        return (
            <div>
                <Header />
                <props.component />
            </div>
        );
    }
}
