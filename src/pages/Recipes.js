import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import RecipeCard from '../components/RecipeCard'
import axios from 'axios';

export default function Recipes() {

    const [recipes, setRecipes]= useState([]);

    useEffect(()=>{
        loadRecipes();
        console.log(recipes);
    },[])

    // load recipes
    const loadRecipes = async ()=>{
        const result = await axios.get("http://localhost:8080/testrecipes");
        setRecipes(result.data);
    }

  return (
    <Grid container spacing={2}>
        { recipes.map((recipe)=>(
            <Grid item xs={12} sm={6} md={3}>
                <RecipeCard name={recipe.title} description={recipe.description} image={recipe.image} kcal={recipe.calories} />
            </Grid> 
        ))}
    </Grid>
   
  )
}
