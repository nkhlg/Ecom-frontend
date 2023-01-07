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

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
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
        
        
        <List sx={{marginTop:'-20px'}}>
          {['Price', 'Brand'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        
      </Drawer>
      <AppBar sx={{marginTop:'64px',background:'none'}}>
        <Toolbar>
            <Box sx={{marginLeft:'200px',color:'#000000'}}>Sort</Box>
        </Toolbar>
      </AppBar>

      
      
    </Box>
    
  );
}
