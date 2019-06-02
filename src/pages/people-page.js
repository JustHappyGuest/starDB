import React from 'react';
import {withRouter} from 'react-router-dom';
import { PeopleList, PersonDetails } from '../components/sw-components';

const PeoplePage = ({history, match : {params : {id}}}) => (
    <div className="row">
        <div className="col-xl-6">
            <PeopleList 
                onItemClick = {(id)=>(
                    history.push(`/people/${id}`)
                )}
            />
        </div>
        <div className="col-xl-6">
            <PersonDetails id = {id}/>
        </div>
    </div>
)


export default withRouter(PeoplePage);