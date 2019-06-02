import ItemList from '../item-list';
import {withDataList, withSwapiService, compose} from '../hoc-helpers'

const mapMethodsToProps = ({getAllPeople}) => ({
    getData: getAllPeople
});

export default compose(
    withSwapiService(mapMethodsToProps),
    withDataList
)(ItemList);
