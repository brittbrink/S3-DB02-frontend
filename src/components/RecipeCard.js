import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import PastaImage from '../image/Pasta-met-garnalen.jpg'

export default function RecipeCard(props) {
  return (
    <div className="container">
        <div className="py-4">
            <Card sx={{
                minWidth: 200,
                minHeight: 325,
                ':hover': {
                boxShadow: 20, // theme.shadows[20]
                },
            }}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="image recipe"
            />
            <CardContent >
                <Typography noWrap gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description} {props.kcal} kcal
                </Typography>
            </CardContent>
            <CardActions style={{flex: 1}}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    </div>
  );
}
