import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/index';

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                name: 'Bacon',
                amount: 1
            },
            {
                name: 'Beef',
                amount: 0
            },
            {
                name: 'Bread-Bottom',
                amount: 1
            },
            {
                name: 'Bread-Top',
                amount: 1
            },
            {
                name: 'Cheese',
                amount: 1
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
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;