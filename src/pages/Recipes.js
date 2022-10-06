import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BrittBeautifulImage from '../image/Pasta-met-garnalen.jpg'

export default function MediaCard() {
  return (
    <div className="container">
        <div className="py-4">
            <Card sx={{ 
                maxWidth: 345,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' }, 
            }}>
            <CardMedia
                component="img"
                height="140"
                image={BrittBeautifulImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
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
