import React from 'react';
import {withRouter} from 'react-router-dom';
import { PlanetsList, PlanetDetails } from '../components/sw-components';

const PlanetsPage = ({history, match : {params : {id}}}) => (
    <div className="row">
        <div className="col-xl-6">
            <PlanetsList 
                onItemClick = {(id)=>(
                    history.push(`/planets/${id}`)
                )}
            />
        </div>
        <div className="col-xl-6">
            <PlanetDetails id = {id}/>
        </div>
    </div>
)


export default withRouter(PlanetsPage);