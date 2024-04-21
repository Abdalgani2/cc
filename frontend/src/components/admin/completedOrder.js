import React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import AdminNav from './adminNav';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TextField } from '@mui/material';





const rows = [
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:2,name : 'abed alghani alqadi', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0799996744',link :'https://www.w3.org/' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:3,name : 'hamza aljariri', jobTitle :'Back End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0788886744' ,link :'https://www.w3.org/'},
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:4,name : 'ahmad akhdyd', jobTitle :'IT Maneger', location:"Zarqa",seller:"ahmad mohammad",phone:'0799996744' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:5,name : 'sara mohammad', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0777776744',link :'https://www.w3.org/' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:6,name : 'khalid ahmad', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0799996744',link :'https://www.w3.org/' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:2,name : 'mohammad ahmad', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0780996744' ,link :'https://www.w3.org/'},

];
const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    height:'100%',
    overflow: 'scroll',
    paddingBottum: 2
  };


export default function CompletedOrders() {
    const [open, setOpen] = useState(false);
    const [jobTitle, setJobTitle] = useState(['front end developer']);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function addNewJobField(params) {
    setJobTitle([...jobTitle, '']);
  }
  return (
    <>
    <AdminNav />
    <Container className='main-container-div' maxWidth="xl">
    <TableContainer component={Paper}>
       
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Job Title</TableCell>
            <TableCell >phone</TableCell>
            <TableCell >Image</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >seller</TableCell>
            <TableCell >Link</TableCell>
            <TableCell >Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell>{row.jobTitle}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell><img className='order-pending-image' src={row.image} /></TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.seller}</TableCell>
              <TableCell>{row.link}</TableCell>
              <TableCell ><BorderColorIcon onClick={handleOpen} /><DeleteIcon className='cancel-icon' /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" className='edit-user-info-header' variant="h6" component="h2">
              Edit User Information
            </Typography>
            <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue="ahmad alqadi"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined1"
          label="User Phone"
          name='phone'
          defaultValue="0799996744"
          className='input-edit-default'
        />
        {jobTitle.map((element, index) => (
          <TextField
          required
          id="outlined2"
          label="Job Title"
          name='jobTitle'
          defaultValue={element}
          className='input-edit-default'
        />
        ))}
        <Box>
           <div className='add-new-field' onClick={addNewJobField}> <AddCircleOutlineIcon /> <p>Add New Field</p></div>
        </Box>
        <TextField
          required
          id="outlined3"
          label="WhatsApp"
          name='phone'
          defaultValue="0799996744"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined4"
          label="instagram Label"
          name='instgramLabel'
          defaultValue="0799996744"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined4"
          label="instagram Link"
          name='instgramLink'
          defaultValue="instalink example"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined4"
          label="Facebook Label"
          name='facebookLabel'
          defaultValue="0799996744"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined4"
          label="Facebook Link"
          name='facebookLink'
          defaultValue="instalink example"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined4"
          label="TikTok Label"
          name='tikTokLabel'
          defaultValue="0799996744"
          className='input-edit-default'
        />
        <TextField
          required
          id="outlined4"
          label="TikTok Link"
          name='tikTokLink'
          defaultValue="instalink example"
          className='input-edit-default'
        />

        
          </Box>
        </Fade>
      </Modal>
      
    </TableContainer>
    </Container>
    </>
  );
}