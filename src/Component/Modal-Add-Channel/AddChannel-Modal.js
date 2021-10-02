import React, { useState } from 'react'
import { Modal, Typography, Button, Box, TextField } from '@material-ui/core'
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

const AddChannelModel = () => {
 const [open, setOpen] = React.useState(false);
 const [channel, setChannel] = useState('');
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 return (
  <div>
   <Button onClick={handleOpen}>Open modal</Button>
   <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box sx={style}>
     <Typography id="modal-modal-title" variant="h6" component="h2">
      Please Enter Your Channel Name
     </Typography>
     <TextField variant='outlined' value={channel} onChange={(e) => setChannel(e.target.value)} />
     <Button variant='contained' >
      Enter
     </Button>
    </Box>
   </Modal>
  </div>
 );
}

export default AddChannelModel;