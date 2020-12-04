import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from "./Star";

function Stars({count}) {
    const stars = [];
    for (let i = 1; i <= count; i++) {
        stars.push({id: shortid.generate()})
    }

    return (
        <>
            {count > 0 && count <= 5 &&
            <ul className="card-body-stars u-clearfix">
                {stars.map(e => <Star key={e.id}/>)}
            </ul>}
        </>)}

Stars.propTypes = {
    count: PropTypes.number
}

Stars.default = {
    count: 0
}
export default Stars;
