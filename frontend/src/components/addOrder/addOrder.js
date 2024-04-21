import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
// import useStyle from "./login-style";
import './addOrder.css';
import { TextField, Box, Grid, Button, Typography, Input } from '@mui/material';
import { AddOrderContext } from '../../contexts/addOrder';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Nav from '../navBar/nav';




const AddOrder = () => {
    const [category, setCategory] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState([]);
    document.body.classList.add('mbAdd');


    // const classes = useStyle();
    // const addOrderContext = useContext(AddOrderContext);
    // // on click submit 
    const handleSubmit = (e) => {
        // addOrderContext.addOrder();
    };



    return (<div>
        <Nav />
        <div >
            <form>
                <Grid item xs={12}>
                    {/* create Title */}
                    <TextField item xs={12}
                        label="Enter Name"
                        // onChange={(e) => {
                        //     addItemContext.setTitle(e.target.value.toLowerCase());
                        // }} 
                        />

                </Grid>
            </form>
        </div>
    </div>
    )
};

export default AddOrder;