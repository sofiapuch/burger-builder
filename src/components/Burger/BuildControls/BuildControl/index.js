import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => {

    return (
        <div className="build-control">
            <p className="build-control__label">{props.label}</p>
            <div className="build-control__buttons-wrapper">
                <button className="build-control__button build-control__button--remove">Remove</button>
                <button className="build-control__button build-control__button--add"
                    onClick={props.addIngredient}>Add</button>
            </div>
        </div>
    )
}

export default buildControl;