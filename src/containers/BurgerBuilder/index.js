import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/index';
import BuildControls from '../../components/Burger/BuildControls/index';

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                name: 'Bacon',
                amount: 0
            },
            {
                name: 'Beef',
                amount: 0
            },
            {
                name: 'Cheese',
                amount: 0
            },
            {
                name: 'Chicken',
                amount: 0
            },
            {
                name: 'Salad',
                amount: 0
            }
        ]
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients} />
            </Aux>
        );
    }
}

export default BurgerBuilder;