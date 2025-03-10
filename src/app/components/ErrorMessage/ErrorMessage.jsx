'use client';

import PropTypes from 'prop-types';

export default function ErrorMessage({message}) {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string
};