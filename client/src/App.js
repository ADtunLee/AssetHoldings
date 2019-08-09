import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Page/HomePage'
import SearchResultRouter from './Router/SearchResultRouter'
class App extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route path="/" exact  component={HomePage}></Route>
                    <Route path="/ket-qua" component={SearchResultRouter}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
 