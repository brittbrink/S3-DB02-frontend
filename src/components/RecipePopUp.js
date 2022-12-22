import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffc107',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

export default function ModalPopUp(props) {
  console.log("Laad hij in?");

  const [recipe,setRecipe]=useState([]);

  useEffect(()=>{
    loadRecipes();
  },[])

 // load recipes
  const loadRecipes = async ()=>{
  const result = await axios.get(`https://s3-ip-backend.azurewebsites.net/get/recipes/summary/${props.recipeID}`);
  setRecipe(result.data);
}

  console.log(props.recipeID);
  console.log(recipe);
  return (
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color={"#fff"}>
            Recipe summary:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} color={"#fff"}>
              {recipe.summary}
          </Typography>
        </Box>
      </Modal>
  );
}
