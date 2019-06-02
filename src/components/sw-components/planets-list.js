import ItemList from '../item-list';
import {withDataList, withSwapiService, compose} from '../hoc-helpers'

const mapMethodsToProps = ({getAllPlanets}) => ({
    getData: getAllPlanets
});

export default compose(
    withSwapiService(mapMethodsToProps),
    withDataList
)(ItemList);
