import React from 'react';

const ItemDetailsView = ({item : { name, image, ...property }, children}) => (
    <div className="card w-100"  >
        <h3 className="card-header">{name}</h3>
        <img
            style={{ 'height': '200px' }}
            className="rounded my-2 mx-auto d-block"
            src={image}
            alt={name}
        />
        <ul className="list-group list-group-flush">
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, { property });
                })
            }
        </ul>
    </div>
);

export default ItemDetailsView;