import React, { useEffect, useState } from 'react';
import './Home.css';
import Meal from './Meal';
const Home = () => {
    const [inputText, setInputText] = useState(" ");
    const [meals, setMeals] = useState([]);
    const searchFood = e =>{
        setInputText(e.target.value);
    }
    useEffect( ()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data.meals));
    
    },[inputText]);
    return (
        
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <h3 className='text-capitalize fs-3 fw-3 text-primary my-3'>this is Home components.</h3>
                <input className='w-80 input rounded-3' onChange={searchFood} type="text" input="" id="" ></input>
                <br></br>
                <h3>Result found: {meals.length}</h3>
           
              <div className='row text-align-center meal-details'>
              {
                        meals.map(meals => <Meal key={meals.idMeals} meals ={meals}> </Meal>)
                    }
               

              </div>
               
             </div>

            </div>
            
        </div>
    );
};

export default Home;