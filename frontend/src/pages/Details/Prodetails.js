import  './Prodetails.css';
import { useGetoneProductsByNameQuery } from '../../Redux/productsApi'
import { useParams } from 'react-router-dom';
import DetailsThumb from './DetailsThumb';
import { useState } from 'react';
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {Typography,Box} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { decreaseQuantity, increaseQuantity } from '../../Redux/cartSlice';
import {Button,IconButton} from '@mui/material';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  
  },
}));

const Prodetails = () => {
  let { id } = useParams();
  const myRef = useRef(null);
  const [index, setindex] = useState(0);
  const { data, error, isLoading } = useGetoneProductsByNameQuery(id)
  const {selectedProductsId,selectedProducts} = useSelector((state) => state.carttt)
  
  const dispatch = useDispatch()
  const handleTab = (index) => {
    setindex(index)
    const images = myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  const producto = (itemApi) => {
    const increaso = selectedProducts.find((item) => {
      return item.id === itemApi.id
    })
    return increaso.quantity
  }
  if(error){
    return(
      <Box>
   <Typography variant="h3" color="error">Error......</Typography>
      </Box>
    )
  }
  if(isLoading){
    return(
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }
  if(data){
  return (
    <div className="app">
          
            <div className="details" >
              <div className="big-img">
                <img src={data.imageLink[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{data.productName}</h2>
                  <span>${data.price}</span>
                </div>
                

                <p>{data.description}</p>
                

                <DetailsThumb images={data.imageLink} tab={handleTab} myRef={myRef} />
                {selectedProductsId.includes(data.id)?(
           <div style={{ marginTop:"30px"}}  className="much">
          <IconButton color="primary" onClick={() => {
            dispatch(decreaseQuantity(data))
           }} sx={{mr:"10px"}}>
           <Remove/>
           
           </IconButton>
           <StyledBadge badgeContent={producto(data)} color="primary"/>

           
           <IconButton color="primary" onClick={() => {
            dispatch(increaseQuantity(data))
           }} sx={{ml:"10px"}}>
          <Add/>
          
           </IconButton>
        </div>
        ):(
          <Button onClick={() => {
            dispatch(addToCart(data))
          }} sx={{textTransform:"capitalize",lineHeight:1.1,p:1, marginTop:"30px"}} variant="contained" color="primary">
            Add to cart
          </Button>
        )}

              </div>
            </div>
          
      </div>
  );
}
}

export default Prodetails;
