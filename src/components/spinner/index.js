import React from 'react';

const Spinner = ({center}) => <div className={"w-100"+( center ? " text-center" : "")}><div class="spinner-grow text-primary" role="status"></div></div>;

Spinner.defaultProps = {
    center: false 
}

export default Spinner;