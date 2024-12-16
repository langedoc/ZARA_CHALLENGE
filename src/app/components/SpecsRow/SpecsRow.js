import React from 'react';
import PropTypes from 'prop-types';

export default function SpecsRow({ label, data }) {
    
    return (
        <p key={label}>{label}:{data}</p>
    );
}

SpecsRow.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};