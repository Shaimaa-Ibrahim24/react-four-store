import React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme, IconButton } from '@mui/material'
import Brightness7 from '@mui/icons-material/Brightness7';
import Brightness4 from '@mui/icons-material/Brightness4';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Drawerr = ({drawerWidth,settheme,blocky,tempy,setblocky,settempy}) => {
  const theme = useTheme()
  const location = useLocation()
const navigate =  useNavigate()
const {selectedProducts} = useSelector((state) => state.carttt)
  const listo = [
    {name:"Home",icon:<Home/>,linko:("/")},
    {name:"Cart",icon:<StyledBadge badgeContent={selectedProducts.length} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>,linko:("/cart")},
    
    
  ]
  return (
    <Drawer
    sx={{
      display:{xs:blocky,sm:"block"},
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant={tempy}
    anchor="left"
    open={true}
    onClose={() => {
      setblocky("none")
      settempy("permanent")
    }}
  >
    
    
    <List>
    <ListItem sx={{display:"flex",justifyContent:"center",mb:"14px"}} disablePadding>
            <IconButton onClick={() => {
              localStorage.setItem("mymode",theme.palette.mode === "light"?"dark":"light")
       settheme(theme.palette.mode === "light"?"dark":"light")
    }} color='inherit'>
      {theme.palette.mode === "dark"?<Brightness7 sx={{color:"orange"}}/>:<Brightness4/>}
    </IconButton>
          </ListItem>
          <Divider/>
          {listo.map((item) => {
            return(
              <ListItem key={item.name} sx={{bgcolor:location.pathname === item.linko?theme.palette.favColor.main:null}} disablePadding>
            <ListItemButton onClick={() => {
              navigate(item.linko)
            }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
            )
          })}
           
          </List>
  </Drawer>
  );
}

export default Drawerr;

