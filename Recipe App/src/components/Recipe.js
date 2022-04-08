import React from 'react';
import style from './recipe.module.css';
import Accordion from 'react-bootstrap/Accordion';
import tasty from './tasty.png';

let i=0;
const Recipe = ({ title, cuisine, calories, image, ingredients, nutrient }) => {
    return (
        <div className={style.recipe}>
            
            <h1>{title}</h1>
            <p>Cuisine: {cuisine}</p>
            <p>Calories: {calories}</p>
            
            <img src={image} alt="" className={style.recipe - image} style={{
                border: '5px solid black', borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50, overflow: 'hidden'
            }}
            />
            <img src={tasty} alt="" width="50" height="50" className={style.corner}/> 
            
            <br/> <br/>
            
            <Accordion>
            <Accordion.Toggle as='button'eventKey={i}> Ingredients</Accordion.Toggle>
            <Accordion.Collapse eventKey={i}>
                <ol>
                    {ingredients.map
                        (ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                </ol>
            </Accordion.Collapse>
            </Accordion>
            
        </div>
    );
}
i++;
export default Recipe;