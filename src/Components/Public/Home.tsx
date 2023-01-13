import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useState ,useEffect} from "react";
import { product, viewFilteredProduct, viewProduct } from '../../services/ProductServices';
import { viewSortedProduct } from '../../services/ProductServices';
import {FormControl, FormHelperText, Input, InputLabel, TextField} from "@mui/material";
import Alert from '@mui/material/Alert';
import React from 'react';

const drawerWidth = 200;


export default function PermanentDrawerLeft() {
  
  const [row, setRow] = useState<any[]>([])
  const [srt,setSrt]=useState('')

  useEffect(() => {

    viewProduct().then((data) => {

          setRow(data.data)
          

      })
    


  }, []);
 

  const [min, setMin] = useState('');

  const [max, setMax] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [err, setErr] = useState('')
  const [ord,setOrd] = useState('asc')
  
  async function formSubmit(e: any) {
    e.preventDefault();
    await viewFilteredProduct({
      ord:ord,
      min:min ,
      max: max
    }).then((data)=>{
      setRow(data.data)
    })
      ;
  }
async function reset(s:any){
    setMax('')
    setMin('')
   await viewProduct().then((data) =>{
      setRow(data.data)
    })
    
    
  
    
  }
  function sortAsc():any{
    setOrd('asc')
    viewSortedProduct(min,max,'asc').then((data) => {
      setRow(data.data)
  })
  }
  function sortDesc():any{
    setOrd('desc')
    viewSortedProduct(min,max,'desc').then((data) => {
      setRow(data.data)
  })
  }
  function formChange(e:any){
    e.preventDefault()
    if(parseInt(min)>=parseInt(max)){
      
      setErr('1')
     
    }
    else{
      formSubmit(e)
    }

  }
  

  
  
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
       
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop:'64px'
          },
        }}
        variant="permanent"
        anchor="left"
      >
    
        <Toolbar><Typography variant="h6">
          Filter  </Typography></Toolbar>
          <form onSubmit={formChange}>
<FormControl sx={{ marginTop: 1}}>
  <TextField inputProps={{ pattern: "^[0-9]*$" }} sx={{ marginTop: 1}} id="outlined-basic" name="min" label="Min" onChange={e => setMin(e.target.value)} variant="outlined"/>
  <TextField inputProps={{ pattern: "^[0-9]*$" }} sx={{ marginTop: 1}} id="outlined-basic" name="max" label="Max" onChange={e => setMax(e.target.value)} variant="outlined"/>
  <Button id='btn' sx={{ marginTop: 1}} type="submit" variant="contained">Filter</Button>
  <Button onClick={reset} id='rst' sx={{ marginTop: 1}} type="reset" variant="contained">Reset</Button>
  
  {err && <Alert severity="error">Min should be less than max</Alert>}
</FormControl>
</form>
      </Drawer>
      <AppBar sx={{marginTop:'64px',background:'white'}} >
        <Toolbar>
            <Box sx={{marginLeft:'200px',color:'#000000'}}>
              Sort by Price:
          <Button style={{color:'black'}} onClick={sortAsc}>Low to high</Button>
          <Button style={{color:'black'}} onClick={sortDesc}>High to low</Button>
               </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{marginTop:'100px'}} >
    {
      row.map(row => (
        <Grid item xs={6}>

      <Card sx={{ width:'350px',marginTop:'100px',marginLeft:'25px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {row.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Price:{row.price}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor:'#0380fc',color:'white',marginLeft:'225px'}} size="small">Add to cart</Button>
        
        
      </CardActions>
    </Card>
    </Grid>
      ))
    }
    </Grid>
      
    </Box>
    
  );
}
