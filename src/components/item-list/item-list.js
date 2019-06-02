import React from 'react';
import Spinner from '../spinner';

const ItemList = (props) => {
    const renderItems = props.itemList.map(item => {
        const value = props.renderItem(item);
        return (
            <a
                key = {item.id}
                className={`list-group-item list-group-item-action flex-column align-items-start ${(props.selectedItem === item.id) ? 'active' : null}`}
                onClick={() => props.onItemClick(item.id)}
            >
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{value}</h5>
                </div>
            </a>
        );
    });

    return (
        <div className="list-group">
            {
                (props.loaded)
                    ? renderItems
                    : <Spinner />
            }
        </div>
    );
}

ItemList.defaultProps = {
    renderItem : item => item.name
}

export default ItemList;