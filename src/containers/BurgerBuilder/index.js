import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/index';
import BuildControls from '../../components/Burger/BuildControls/index';

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                name: 'Bacon',
                type: 'bacon',
                amount: 0
            },
            {
                name: 'Beef',
                type: 'beef',
                amount: 0
            },
            {
                name: 'Cheese',
                type: 'cheese',
                amount: 0
            },
            {
                name: 'Chicken',
                type: 'chicken',
                amount: 0
            },
            {
                name: 'Salad',
                type: 'salad',
                amount: 0
            }
        ]
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;