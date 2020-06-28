import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = ( props ) => {
    console.log(props.ingredients);
    let transformeIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
            
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((previousValue,currentValue,currentIndex)=>{
        return previousValue.concat(currentValue);
    },[]);
    console.log(transformeIngredients);
    if(transformeIngredients.length === 0){
        transformeIngredients = (<p>Please start adding ingredients</p>);
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformeIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;