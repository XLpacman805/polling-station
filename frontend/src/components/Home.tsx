import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Navigation from './Navigation';

class Home extends React.Component<RouteComponentProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>HELLO HOME WORLD</h1>
                <Navigation />
            </div>
        )
    }

}

export default Home;