import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Navigation from './Navigation';

interface State {
    optionCount: number;
};

/**
 * Rewrite this component such that each field in a poll is represented in the state as it's own object. 
 * This will make it easier to delete fields, should a user wish to. 
 */

class CreatePoll extends React.Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            optionCount : 2
        }
        this.addOption = this.addOption.bind(this);
    }

    addOption() {
        this.setState({optionCount: this.state.optionCount +1});
    }

    render() {
        let myOptions : Array<any> = [];
        let pollOption = (index: number) => {
            return (
                <div id={'poll-fieldset' + index.toString()}>
                    <label htmlFor={'poll-option' + index.toString()}>Poll Option: </label>
                    <input type="text" id={'poll-option' + index.toString()} name={'poll-option' + index.toString()}></input>
                    <button onClick={() => removeOption(index)}> <span role="img" aria-label="Remove poll option">🗑️</span> </button>
                </div>
            )
        }
        let removeOption = (index: number) => {
            myOptions.splice(index, 1);
        }
        for (let i = 0; i < this.state.optionCount; i++) {
            myOptions.push(pollOption(i));
        }
        return (
            <div>
                <Navigation />
                <form>
                    <label htmlFor="poll-title">Poll Title</label>
                    <input name="poll-title" id="poll-title" type="text"></input>
                    { myOptions.map( element => { return element }) }
                </form>

                <button onClick={this.addOption}>Add Field</button>
            </div>
        );
    }
}

export default CreatePoll;