import React from 'react';
import BurgerIngredient from './BurgerIngredient/index';

const burger = () => {

    return (
        <div>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    );

}

export default burger;