import React from 'react';
import BurgerIngredient from './BurgerIngredient/index';

import './Burger.scss';

const burger = () => {

    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    );

}

export default burger;