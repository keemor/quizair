import { h, render } from 'preact';
import App from './app';

import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';

render(
    <div id="foo">
        <App />
    </div>,
    document.body
);
