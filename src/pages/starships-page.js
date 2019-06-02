import React from 'react';
import {withRouter} from 'react-router-dom';
import { StarshipsList, StarshipDetails } from '../components/sw-components';

const StarshipsPage = ({history, match : {params : {id}}}) => (
    <div className="row">
        <div className="col-xl-6">
            <StarshipsList 
                onItemClick = {(id)=>(
                    history.push(`/starships/${id}`)
                )}
            />
        </div>
        <div className="col-xl-6">
            <StarshipDetails id = {id}/>
        </div>
    </div>
)


export default withRouter(StarshipsPage);