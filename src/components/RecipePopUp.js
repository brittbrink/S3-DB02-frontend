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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalPopUp(props) {
  console.log("Laad hij in?");
  console.log("orderID: "+ props.orderID + "tableNumber:" + props.tableNumber);
  return (
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order is done!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The dish {props.dishName} from table {props.tableNumber} is ready to be served.
          </Typography>
        </Box>
      </Modal>
  );
}
