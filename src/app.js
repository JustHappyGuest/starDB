import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


import Header from './components/header';
import SwapiService from './services/swapi-service';

import { SwapiServiceProvider } from './components/swapi-service-context';
import PeoplePage from './pages/people-page';
import PlanetsPage from './pages/planets-page';
import StarshipsPage from './pages/starships-page';
import { RandomPlanet } from './components/sw-components';


const App = () => {
    const swapiService = new SwapiService();

    return (
        <Router>
            <SwapiServiceProvider value = {swapiService}>
                <div className="app container">
                    <Header />
                    <RandomPlanet from={2} to={10}/>
                    <Switch>
                        <Route path="/" render={()=>(<h3>Welcome to STARDB</h3>)} exact />
                        <Route path="/people/:id?" component={PeoplePage} exact/>
                        <Route path="/planets/:id?" component={PlanetsPage} exact/>
                        <Route path="/starships/:id?" component={StarshipsPage} exact/>
                        <Redirect to="/" exact/>
                    </Switch>
                    
                </div>
            </SwapiServiceProvider>
        </Router>
    );

}


export default App;
