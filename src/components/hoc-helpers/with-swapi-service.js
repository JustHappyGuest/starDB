import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

export const withSwapiService = (mapMethodsToProps) => (Wrapped) => (props) => (
    <SwapiServiceConsumer>
        {
            (swapiService)=>(
                <Wrapped {...props}  {...mapMethodsToProps(swapiService)}/>
            ) 
        }  
    </SwapiServiceConsumer>
);


