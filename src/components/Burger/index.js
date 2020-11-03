import React from 'react';
import BurgerIngredient from './BurgerIngredient/index';

import './Burger.scss';

const burger = (props) => {

    const ingredients = props.ingredients.map( ( ingredient, index ) => {
        return ingredient.amount > 0 ? <BurgerIngredient key={index} type={ingredient.name.toLowerCase()} /> : ''  
    });

    return (
        <div className='burger'>
            {ingredients}
        </div>
    ); 

}

export default burger;