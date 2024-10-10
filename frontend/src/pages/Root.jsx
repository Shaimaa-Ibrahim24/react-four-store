import React from 'react';
import {Outlet} from 'react-router-dom';
import Appbarr from '../comp/Appbarr';
import Drawerr from '../comp/Drawerr';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import getDesignTokens from "../Style/Mytheme"


const drawerWidth = 240;

const Root = () => {
  const [mode, settheme] = useState(localStorage.getItem("mymode")===null?"light":localStorage.getItem("mymode")==="light"?"light":"dark");
  
  const [blocky, setblocky] = useState("none");
  const [tempy, settempy] = useState("permanent");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div>
    <Appbarr drawerWidth={drawerWidth} blocky={blocky}  setblocky={setblocky} settempy={settempy}/>
    <Drawerr drawerWidth={drawerWidth}  settheme={settheme} blocky={blocky} tempy={tempy} setblocky={setblocky} settempy={settempy}/>
    <Box sx={{ml: {sm:`${drawerWidth}px`},marginTop:"66px",display:"flex",justifyContent:"center"}}>
      <Outlet />
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Root;

