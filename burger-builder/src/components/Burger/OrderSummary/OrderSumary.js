import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = ( props ) => {
    
    const ingrdientSummary = Object.keys(props.ingredients).map((igKey)=>{
        return (
            <li key={igKey}>
                <span style={{textTransform : 'capitalize'}}>{igKey}</span> 
                <span>: {props.ingredients[igKey]}</span>
            </li>);
    });
    
    return (<Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingrdients:</p>
        {ingrdientSummary}
        <p><strong>Total Price : {props.totalPrice}</strong></p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>)
};
export default orderSummary;
