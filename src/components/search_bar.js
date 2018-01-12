import React, { Component} from 'react';

/* This is called a functional component; Call and just display JSX
const SearchBar = () => {
    return <input />;
};
*/

// Start with a functional component but when needing to do extra functionality, use Class based component

// Class based component
class SearchBar extends Component {
    render() {
        return <input />;
    }
}

export default SearchBar;