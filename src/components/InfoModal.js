import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ModalInfo({ flag, close }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div>
      <Modal
        open={flag}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label className='title2'>Sucess</label> 
          <Typography id="modal-modal-title" variant="h6" component="h3">
            A pet token has been set to your wallet
          </Typography>
          <Box style={{  textAlign: 'center', margin:"1em"}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You must wait up to 1 minute or more depending on the network congestion
          </Typography>
          <Typography style={{color:"red",marginBottom:'2em'}} sx={{ mt: 2 }}>
          thanks for your contribution!
          </Typography>
          </Box>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button variant="contained" onClick={close} style={{backgroundColor:"#e91e63"}} >Close</Button>
          </Stack>
        </Box>

      </Modal>
    </div>
  );

}

export default ModalInfo;
