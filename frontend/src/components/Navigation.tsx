import React from 'react';
import { Link } from '@reach/router';

class Navigation extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/" > Home </Link>
                    </li>
                    <li>
                        <Link to="/sign-in"> Sign In </Link>
                    </li>
                    <li> 
                        <Link to="/create-poll"> Create Poll </Link> 
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;