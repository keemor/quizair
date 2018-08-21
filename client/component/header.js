import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';

import Toolbar from 'preact-material-components/Toolbar';
import Menu from 'preact-material-components/Menu';

import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Menu/style.css';

export default class Header extends Component {
    render() {
        return (
            <Toolbar className="topappbar">
                <Toolbar.Row>
                    <Toolbar.Section align-start>
                        <Toolbar.Title>
                            <Link href="/" class="toolbarTitleLink">
                                Quizair
                            </Link>
                        </Toolbar.Title>
                    </Toolbar.Section>
                    <Toolbar.Section align-end>
                        <Menu.Anchor>
                            <Toolbar.Icon
                                menu={true}
                                onClick={e => {
                                    this.menu.MDComponent.open = true;
                                }}
                            >
                                more_vert
                            </Toolbar.Icon>
                            <Menu
                                ref={menu => {
                                    this.menu = menu;
                                }}
                            >
                                <Link href="/about" class="mdc-list-item" onClick={this._onClickMenu}>
                                    <Menu.Item>About</Menu.Item>
                                </Link>
                            </Menu>
                        </Menu.Anchor>
                    </Toolbar.Section>
                </Toolbar.Row>
            </Toolbar>
        );
    }
}
