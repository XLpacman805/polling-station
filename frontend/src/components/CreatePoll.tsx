import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Navigation from './Navigation';
import { option } from '../../../shared/models/Models';

interface State {
    options: Array<option>
};

/**
 * Rewrite this component such that each field in a poll is represented in the state as it's own object. 
 * This will make it easier to delete fields, should a user wish to. 
 */

class CreatePoll extends React.Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            options: [ {text: '', count: 0}, {text: '', count: 0} ]
        }
        this.addOption = this.addOption.bind(this);
    }

    addOption() {
        this.setState({options: this.state.options.concat([{text: '', count: 0}])});
    }

    render() {
        let pollOption = (option: option, index: number) => {
            return (
                <div id={'poll-fieldset' + index.toString()}>
                    <label htmlFor={'poll-option' + index.toString()}>Poll Option: </label>
                    <input type="text" id={'poll-option' + index.toString()} name={'poll-option' + index.toString()} value={option.text}></input>
                    <span role="img" aria-label="Remove poll option">🗑️</span>
                </div>
            )
        }
        return (
            <div>
                <Navigation />
                <form>
                    <label htmlFor="poll-title">Poll Title</label>
                    <input name="poll-title" id="poll-title" type="text"></input>
                    { this.state.options.map((option, index ) => {
                        return pollOption(option, index);
                    })}
                </form>

                <button onClick={this.addOption}>Add Field</button>
            </div>
        );
    }
}

export default CreatePoll;