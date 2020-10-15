import React from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphabagesMap from './pages/OrphabagesMap';


function Router(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/app" component={OrphabagesMap} exact />
        
        </BrowserRouter>
    )
}

export default Router;