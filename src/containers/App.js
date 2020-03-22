import React, {Component} from 'react';
import Searchbox from '../components/Searchbox.js';
import CardList from '../components/CardList.js';
// import { robots } from './robots';
import './App.css';
// import { render } from '@testing-library/react';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }
    }
}        

export default App;