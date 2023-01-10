// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Outlet,useNavigate } from "react-router-dom";
// import {useState} from 'react'
// import { product } from '../../services/ProductServices';

// function AddProduct() {
    
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState('');
//     async function handleFormSubmit(e:any){
//         e.preventDefault();
//         await product({
//             name: name,
//             price:price,
//             image:image
            
//           })
        
//         ;}
    
//     return (
//         <>
      
//             <div className="withdrawDeposit">
//                 <div className="container">
//                     <form onSubmit={handleFormSubmit}>
//                     <div className="form">
//                             <label className="name">Name</label>
//                             <input className="input" type="text" onChange={e=>setName(e.target.value)}></input>
//                         </div>
//                         <div className="form">
//                             <label className="price">Price</label>
//                             <input className="input" type="text" onChange={e=>setPrice(e.target.value)}></input>
//                         </div>
//                         <div className="form">
//                             <label className="image">Image</label>
//                             <input id='image' className="input" type="text" onChange={e=>setImage(e.target.value)}></input>
//                         </div>
//                         <div className="form">
//                             <button>Submit</button>
                            
                            
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
      
//     );

// }

// export default AddProduct;


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

      <FormControl sx={{ marginTop: 5 }}>

        <Typography variant="h3"> Add Product  </Typography>

        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_name" label="Product Name" variant="outlined" onChange={e => setName(e.target.value)} />

        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_price" label="Price" variant="outlined" onChange={e => setPrice(e.target.value)} />

        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_image" label="Image" variant="outlined" onChange={e => setImage(e.target.value)} />

        <Button sx={{ marginTop: 5, width: 150, marginLeft: 20 }} type="submit" variant="contained">ADD</Button>

      </FormControl>




    </form>



  );

}
export default AddProduct