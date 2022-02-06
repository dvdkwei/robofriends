import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import 'tachyons';
import Scroll from "../components/Scroll";
import {connect} from "react-redux";
import {setSearchField, fetchRobots} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.fetchRobots.isPending,
        robots: state.fetchRobots.robots,
        error: state.fetchRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onFetchRobots: () => fetchRobots(dispatch)
    }
}

class App extends React.Component{

    componentDidMount() {
        this.props.onFetchRobots();
    }

    render() {
        return (
            <div align={'center'}>
                <h1 className={'f1'}>Robofriends</h1>
                <SearchBox searchChange={this.props.onSearchChange}/>
                <Scroll>
                    <CardList robots={
                        this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
                    }/>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);