import React from 'react';

const ItemDetailsViewLong = ({item : { name, image, ...property }, children}) => (
    <div className="card w-100 my-2"  >
        <div className="row">
            <div className="col-3">                
                <img
                    style={{ 'height': '200px' }}
                    className="rounded my-2 mx-auto d-block"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="col-9">
                <h3 className="card-header">{name}</h3>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, child => {
                            return React.cloneElement(child, { property });
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
);

export default ItemDetailsViewLong;