import React from 'react'
import Grid from '@mui/material/Grid'
import RecipeCard from '../components/RecipeCard'

export default function Recipes() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
            <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <RecipeCard />
        </Grid>
    </Grid>
   
  )
}
