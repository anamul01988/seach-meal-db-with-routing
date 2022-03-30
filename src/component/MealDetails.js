import './MealDetails.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MealDetails = () => {
    const {mealdb} = useParams();
    const [meal,setMeal] = useState({});
    let navigate = useNavigate();
    function handleClick() {
        navigate('/')
        // navigate(-1)//aitar mane previous page a jabe
        // navigate(1) //aitar mane samner page a jabe
      }
    useEffect( ()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]));
    }, [mealdb]);
    return (
        <>
        <div className='meal-single-details bg-secondary container text-light my-3 p-4'>
            <p>{console.log(meal)}</p>
            <h2>id: {mealdb} </h2>
            <img src={meal.strMealThumb} alt="img" />
            <h4>Area: {meal.strArea}</h4>
            <h4> meal: {meal.strCategory}</h4>
            <button className='btn btn-warning btn-lg'  onClick={handleClick}>Go Home</button>
        </div>
   
        {/* <div className="card" > 
          <img src={meal.strMealThumb} alt="img" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">id: {mealdb} </h5>
          <p className="card-text">Area: {meal.strArea}</p>
          <p className="card-text">meal: {meal.strCategory}</p>
        </div>
     
        <div className="card-body">

        </div>
      </div> */}
     </>
    );
};

export default MealDetails;