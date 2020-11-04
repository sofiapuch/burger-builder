import React from 'react';
import BuildControl from './BuildControl/index';

import './BuildControls.scss';

const buildControls = (props) => {

    const controls = props.ingredients.map((ingredient, index) => {
        return <BuildControl label={ingredient.name} />
    })

    return (
        <div className="build-controls">
            {controls}
        </div>
    )
}

export default buildControls;