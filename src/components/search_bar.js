import React, {Component} from 'react';

/* This is called a functional component; Call and just display JSX
const SearchBar = () => {
    return <input />;
};
*/

// Start with a functional component but when needing to do extra functionality
// or anything relating to state, use Class based component Class based
// component
class SearchBar extends Component {
    // State
    constructor(props) {
        super(props);

        this.state = {
            term: 'boberta'
        };
        // Change state by doing this.setState({}) instead of saying this.state =
        // event.target.value
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.setState({term: event.target.value})}/>
                    Value of this input: {this.state.term}
            </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;