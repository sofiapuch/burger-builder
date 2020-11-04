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

    getCurrentIngredient = (type) => {
        return this.state.ingredients.filter((ingredient) => {
            return ingredient.type === type;
        });
    }

    addIngredientHandler = (type) => {

        const [ currentIngredient ] = this.getCurrentIngredient(type);

        const updatedIngredients = [
            ...this.state.ingredients
        ]

        const currentAmount = currentIngredient.amount;
        const index = updatedIngredients.indexOf(currentIngredient);
        updatedIngredients[index].amount =  currentAmount + 1;

        console.log(updatedIngredients[index].amount)

        this.setState({ ingredients: updatedIngredients });
    }

    // removeIngredient = (type) => {

    // }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;