
import React from 'react';
import PropTypes from "prop-types";

import Spinner from '../spinner';
import ItemDetailsView from './item-details-view';
import ItemDetailsLongView from './item-details-long-view';

const ItemDetails = ({id, item, image, reload, children, long}) => {
  const itemView = long ? <ItemDetailsLongView item={{ image: image, ...item }} children={children} /> : <ItemDetailsView item={{ image: image, ...item }} children={children} />;
  return (
    (id)
      ? (reload) ? itemView : <Spinner center />
      : "Person is no selected..."
  );
  
}

ItemDetails.propsDefault = {
  long : false
}

ItemDetails.propTypes = {
  reload: PropTypes.bool
}

export default ItemDetails;
