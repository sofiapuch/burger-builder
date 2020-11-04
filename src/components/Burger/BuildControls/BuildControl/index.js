import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => {

    const { label } = props;

    return (
        <div className="build-control">
            <p className="build-control__label">{label}</p>
            <div className="build-control__buttons-wrapper">
                <button className="build-control__button build-control__button--remove">Remove</button>
                <button className="build-control__button build-control__button--add">Add</button>
            </div>
        </div>
    )
}

export default buildControl;