import React from 'react';

import ItemDetails, { Property } from "../item-details";
import { compose, withSwapiService, withDataItem, withRandomId } from "../hoc-helpers";

let RandomPlanet = (props) => (
    <ItemDetails {...props} long>
        <Property title="Population" name="population" />
        <Property title="Rotation period" name="rotationPeriod" />
        <Property title="Diameter" name="diameter" />
    </ItemDetails>
);

const mapMethodsToProps = ({getPlanet, getPlanetImage}) => ({
    getData: getPlanet,
    getImage: getPlanetImage
});



export default compose(
    withRandomId,
    withSwapiService(mapMethodsToProps),
    withDataItem  
)(RandomPlanet);

