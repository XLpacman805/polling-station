import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Navigation from './Navigation';


class CreatePoll extends React.Component<RouteComponentProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navigation />
            </div>
        );
    }
}

export default CreatePoll;