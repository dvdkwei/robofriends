import React from "react";
import CardList from "../components/CardList";
// import {robots} from "./robots";
import SearchBox from "../components/SearchBox";
import 'tachyons';
import Scroll from "../components/Scroll";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearch = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        return (
            <div align={'center'}>
                <h1 className={'f1'}>Robofriends</h1>
                <SearchBox searchChange={this.onSearch}/>
                <Scroll>
                    <CardList robots = {
                        this.state.robots.filter( robot => robot.name.toLowerCase()
                                    .includes(this.state.searchField.toLowerCase()))
                    }/>
                </Scroll>
            </div>
        );
    }
}

export default App;