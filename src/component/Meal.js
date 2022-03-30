import React from 'react';
import './Meal.css';
const Meal = (props) => {
    console.log(props.meals)
    const {idMeal, strMeal, Seafood,strMealThumb} = props.meals;
    
    return (
        <div className='col-md-3 bg-secondary my-3 mx-3 py-2 px-2 meal' >       
            <h2>{idMeal}</h2>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <h4>{Seafood}</h4>
        </div>
    );
};

export default Meal;