import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Meal.css';
const Meal = (props) => {
    console.log(props.meals)
    const {idMeal, strMeal, strCategory ,strMealThumb} = props.meals;
    const navigate = useNavigate();

    const showFriendDetail = () =>{
        navigate('/home/'+idMeal);
    }
    
    return (
        <div className='col-md-3 bg-secondary my-3 mx-3 py-2 px-2 meal' >       
            <h2>{idMeal}</h2>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <h4>{strCategory}</h4>
            <div>
    
            <Link className='btn btn-primary btn-lg me-3' to={'/home/'+ idMeal}>Show Detail</Link>
            <button className='btn btn-warning btn-lg' onClick={showFriendDetail}>Click </button>
            </div>
        </div>
    );
};

export default Meal;