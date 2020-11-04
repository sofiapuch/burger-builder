import React from 'react';
import BuildControl from './BuildControl/index';

import './BuildControls.scss';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Beef', type: 'beef' },
    { label: 'Chicken', type: 'chicken' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' }
]

const buildControls = (props) => {

    return (
        <div className="build-controls">
            { controls.map((control, index) => {
                return <BuildControl key={index} label={control.label} />
            }) }
        </div>
    )
}

export default buildControls;