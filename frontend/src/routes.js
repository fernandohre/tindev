import  {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Feed from './pages/Feed';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/devs/:id" component={Feed} />
        </BrowserRouter>
    );
}