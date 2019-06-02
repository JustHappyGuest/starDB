import React from 'react';
import ItemDetails from '../item-details';
import { Property } from '../item-details';
import { withSwapiService, compose, withDataItem } from '../hoc-helpers';


const mapMethodsToProps = ({getPlanet, getPlanetImage}) => ({
    getData: getPlanet,
    getImage: getPlanetImage
});

const PlanetDetails = (props) => (
    <ItemDetails {...props}>
        <Property title="Population" name="population" />
        <Property title="Rotation period" name="rotationPeriod" />
        <Property title="Diameter" name="diameter" />
    </ItemDetails>
);

export default compose(
                    withSwapiService(mapMethodsToProps),
                    withDataItem
                )(PlanetDetails);