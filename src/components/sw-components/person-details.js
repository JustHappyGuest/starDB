import React from 'react';
import ItemDetails from '../item-details';
import { Property } from '../item-details';
import { withSwapiService, compose, withDataItem } from '../hoc-helpers';




const PersonDetails = (props) => (
    <ItemDetails {...props}>
        <Property title="Gender" name="gender" />
        <Property title="Birth Year" name="birthYear" />
        <Property title="Eye Color" name="eyeColor" />
    </ItemDetails>
);

const mapMethodsToProps = ({getPerson, getPersonImage}) => ({
    getData: getPerson,
    getImage: getPersonImage
});

export default compose(
                    withSwapiService(mapMethodsToProps),
                    withDataItem
                )(PersonDetails);

