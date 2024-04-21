import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import AdminNav from './adminNav';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




const rows = [
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:2,name : 'abed alghani alqadi', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0799996744' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:3,name : 'hamza aljariri', jobTitle :'Back End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0788886744' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:4,name : 'ahmad akhdyd', jobTitle :'IT Maneger', location:"Zarqa",seller:"ahmad mohammad",phone:'0799996744' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:5,name : 'sara mohammad', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0777776744' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:6,name : 'khalid ahmad', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0799996744' },
    { image:'https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png',id:2,name : 'mohammad ahmad', jobTitle :'Front End Develpoer', location:"Zarqa",seller:"ahmad mohammad",phone:'0780996744' },

];

export default function BasicTable() {
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
            <TableCell >Accept/Reject</TableCell>
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
              <TableCell ><CheckCircleIcon className='accept-icon' /><CancelIcon className='cancel-icon' /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </Container>
    </>
  );
}