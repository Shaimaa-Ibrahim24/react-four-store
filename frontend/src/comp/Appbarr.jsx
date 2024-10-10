import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar, Link} from '@mui/material';
import Menu from '@mui/icons-material/Menu';

const Appbarr = ({drawerWidth,setblocky,settempy}) => {
  return (
    <AppBar  sx={{ width:{ sm:`calc(100% - ${drawerWidth}px)`}, ml: {sm:`${drawerWidth}px`} }} position="static">
        <Toolbar>
          <IconButton onClick={() => {
            settempy("temporary")
            setblocky("block")
          }} sx={{mr:"9px",display:{sm:"none",}}}>
            <Menu/>
            </IconButton>
        
          <Link  underline='none' sx={{ flexGrow: 1 , color:"white","&:hover": {fontSize:"18px"}}} href="/">My Expenses</Link>
          <Typography mr={1} variant="body1" >Shaimaa Ibrahim</Typography>
          <Avatar src="./imgs/shaimaa.jpg"/>
        </Toolbar>
      </AppBar>
  );
}

export default Appbarr;
