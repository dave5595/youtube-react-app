import React, { Component} from 'react';

/*//functional component style
const SearchBar = () => {
    return <input/>;
};*/

//added functionality with Components
//class based components
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return(
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event => this.onInputChange( event.target.value)}/>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term : term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;