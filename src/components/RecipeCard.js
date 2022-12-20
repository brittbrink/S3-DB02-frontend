import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeartIcon from '../image/heart-icon.png'
import ModalPopUp from './RecipePopUp';
//import PastaImage from '../image/Pasta-met-garnalen.jpg'

export default function RecipeCard(props) {
const [open, setOpen] = useState(false);
const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
        <div className="py-4">
            <Card sx={{
                minWidth: 200,
                minHeight: 300,
                ':hover': {
                boxShadow: 20, // theme.shadows[20]
                },
                backgroundColor: '#E4E4E4'
            }}>
            <CardActionArea onClick={() => setOpen(true)}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="image recipe"
            />
            <CardContent style={{backgroundColor: "#D3D2D2", padding: "6px"}}>
                <Typography variant="body2" color="text.secondary">
                    {props.kcal} kcal
                </Typography>
            </CardContent>
            <CardContent style={{padding: "15px"}}>
                <Typography noWrap gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
            </CardContent>
            <div style={{display: 'flex', justifyContent:'flex-end', marginRight: '10px'}}>
            <Button color='warning'> Add to favorites </Button>
            </div>
            </CardActionArea>
            </Card>
            <ModalPopUp open={open} onClose={handleClose}/>
        </div>
    </div>
  );
}
