import React from 'react';
import { RouteComponentProps } from '@reach/router';
import startFirebaseUI from '../services/firebaseService';

class SignIn extends React.Component<RouteComponentProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        startFirebaseUI('#sign-in-dialog');
    }

    render () {
        return (
            <div id="sign-in-dialog"></div>
        )
    }
}

export default SignIn;