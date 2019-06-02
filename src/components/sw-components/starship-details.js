import React from 'react';
import ItemDetails from '../item-details';
import { Property } from '../item-details';
import { withSwapiService, compose, withDataItem } from '../hoc-helpers';


const mapMethodsToProps = ({getStarship, getStarshipImage}) => ({
    getData: getStarship,
    getImage: getStarshipImage
});

const StarshipDetails = (props) => (
    <ItemDetails {...props}>
        <Property title="Model" name="model" />
        <Property title="Manufacturer" name="manufacturer" />
        <Property title="ConstIn credit" name="constInCredit" />
        <Property title="Length" name="length" />
        <Property title="Crew" name="crew" />
        <Property title="Passengers" name="passengers" />
        <Property title="Cargo capacity" name="cargoCapacity" />
    </ItemDetails>
);

export default compose(
    withSwapiService(mapMethodsToProps),
    withDataItem
)(StarshipDetails);