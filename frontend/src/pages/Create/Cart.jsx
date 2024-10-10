import { Box,Paper, Button, IconButton, Typography, Divider, Stack } from '@mui/material';
import  './Create.css';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'
import { decreaseQuantity, deleteProduct, increaseQuantity } from '../../Redux/cartSlice';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  backgroundColor:"#1976d2",
  color:"white"
  },
}));
const Cart = () => {
  const {selectedProducts} = useSelector((state) => state.carttt)
  const dispatch = useDispatch()
  let totalo = 0
  return (
    <Box>
    {selectedProducts.map((item) => {
      totalo += Number(item.price)*Number(item.quantity)
      return(
        <Paper key={item.id} dir="rtl" className="boxy">
        <div className="tito">
          <img className="mynew" src={item.imageLink[0]}  alt=""/>
          <p className="teto">{item.productName}</p>
      </div>
       <div className="much">
           <IconButton onClick={() => {
            dispatch(increaseQuantity(item))
           }} sx={{color:"#1976d2",ml:"10px"}}>
           <Add/>
             
           </IconButton>
           <StyledBadge badgeContent={item.quantity} color="secondary"/>

           <IconButton onClick={() => {
            dispatch(decreaseQuantity(item))
           }} sx={{color:"#1976d2",mr:"10px"}}>
           <Remove/>
           </IconButton>
        </div>
         <div className="yes">${item.price}</div>
         <IconButton onClick={() => {
          dispatch(deleteProduct(item))
         }} sx={{display:{xs:"inline-flex",md:"none"}}} color='error'>
           <Delete/>
         </IconButton>
        <Button onClick={() => {
          dispatch(deleteProduct(item))
         }} sx={{display:{md:"inline-flex",xs:"none"}}} variant="text" color="error">
          delete
        </Button>
   </Paper>
      )
    })}

                  <Paper sx={{width:"200px",mx:"auto",mt:"60px"}}>
                    <Typography align='center' p={2} variant="h6" > Cart Summary</Typography>
                    <Divider/>
                    <Stack direction="row" sx={{justifyContent:"space-between",p:2}}>
                      <Typography variant="body1" >Subtotal</Typography>
                      <Typography variant="body1" >${totalo}</Typography>
                    </Stack>
                    <Divider/>
                    <Button fullWidth variant="contained" color="primary">
                      Checkout
                    </Button>
                  </Paper>
    </Box>
  );
}

export default Cart;
