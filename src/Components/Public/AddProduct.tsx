

import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";

import React, { useState } from "react";

import { product } from '../../services/ProductServices';

import { Navigate, useNavigate } from "react-router-dom";



function AddProduct(){

  const navigate = useNavigate();

  const [name, setName] = useState('');

  const [price, setPrice] = useState('');

  const [image, setImage] = useState('');

  async function formSubmit(e: any) {



    e.preventDefault();



    await product({



      name: name,

      price: price,

      image: image

    })

      ;

  }



  return (



    <form onSubmit={formSubmit}>

      <FormControl sx={{ marginTop: 10 }}>

        <Typography variant="h3"> Add Product  </Typography>

        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_name" label="Product Name" variant="outlined" onChange={e => setName(e.target.value)} required />

        <TextField inputProps={{ pattern: "^[0-9]*$" }} sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_price" label="Price" variant="outlined" onChange={e => setPrice(e.target.value)} required />

        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_image" label="Image" variant="outlined" onChange={e => setImage(e.target.value)} required />

        <Button sx={{ marginTop: 5, width: 150, marginLeft: 20 }} type="submit" variant="contained">ADD</Button>

      </FormControl>




    </form>



  );

}
export default AddProduct