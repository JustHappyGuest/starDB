import React from 'react';
export const Property = ({ title, name, property }) => <li className="list-group-item">{title}: {property[name]}</li>;