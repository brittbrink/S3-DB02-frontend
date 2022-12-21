import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
            summary
          </Typography>
        </Box>
      </Modal>
  );
}
