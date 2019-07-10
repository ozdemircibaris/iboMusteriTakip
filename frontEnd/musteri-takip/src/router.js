import _ from 'lodash';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Index from './components';
import NewSeans from './components/NewSeans';
class RouterComp extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <Route exact path="/" component={Index} />
                <Route exact path="/newSeans" component={NewSeans} />
            </Router>
        )
    }
}

export default RouterComp;