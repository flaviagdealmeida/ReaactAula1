import React from 'react';
import Home from './Home';
import Account from './Account';

import { Switch, Route } from 'react-router-dom';

const Main =() => (
    
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastrar-cliente" component={Account}/>
    </Switch>
)

export default Main;