import ItemList from '../item-list';
import {withDataList, withSwapiService, compose} from '../hoc-helpers'

const mapMethodsToProps = ({getAllStarships}) => ({
    getData: getAllStarships
});

export default compose(
    withSwapiService(mapMethodsToProps),
    withDataList
)(ItemList);