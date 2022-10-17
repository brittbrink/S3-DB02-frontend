import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PastaImage from '../image/Pasta-met-garnalen.jpg'

export default function RecipeCard() {
  return (
    <div className="container">
        <div className="py-4">
            <Card sx={{
                minWidth: 200,
                ':hover': {
                boxShadow: 20, // theme.shadows[20]
                },
            }}>
            <CardMedia
                component="img"
                height="140"
                image={PastaImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Recipe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Here you can read what is in the recipe, what ingredients you need and how to prepare the meal.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    </div>
  );
}
