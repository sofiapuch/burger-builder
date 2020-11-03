import React from 'react';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {

    if (!props.type) {
        return null;
    }

    const ingredientClass = `burger__ingredient burger__ingredient--${props.type}`;

    return (
        <div className={ingredientClass}>{props.type}</div>
    )
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;