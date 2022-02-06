import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
// import {robots} from "./robots";
import SearchBox from "../components/SearchBox";
import 'tachyons';
import Scroll from "../components/Scroll";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRobots(data));
    }, []); //[robots] means only run when robots changes

    return (
        <div align={'center'}>
            <h1 className={'f1'}>Robofriends</h1>
            <SearchBox searchChange={event => setSearchField(event.target.value)}/>
            <Scroll>
                <CardList robots={
                    robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
                }/>
            </Scroll>
        </div>
    );
}

export default App;