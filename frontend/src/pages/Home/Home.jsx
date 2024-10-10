import { Stack, Button, Box } from '@mui/material';
import  './Home.css';
import {Card,IconButton} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useGetProductsByNameQuery } from '../../Redux/productsApi'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { decreaseQuantity, increaseQuantity } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  
  },
}));



const Home = () => {
  const { data, error, isLoading } = useGetProductsByNameQuery()
  const {selectedProductsId,selectedProducts} = useSelector((state) => state.carttt)
  const producto = (itemApi) => {
    const increaso = selectedProducts.find((item) => {
      return item.id === itemApi.id
    })
    return increaso.quantity
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
    <Stack direction="row" sx={{flexWrap:"wrap",justifyContent:"center"}}>
  {data.map((item) => {
    return(
      <Card className='cardo' key={item.id} sx={{ maxWidth: 277,mb:6 ,mx:2}}>
    
      <CardMedia
        component="img"
        height="277"
        image={item.imageLink[0]}
        alt={item.productName}
        onClick={() => {
          navigate(`pro-details/${item.id}`)
        }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {item.description} 
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}} disableSpacing>
        {selectedProductsId.includes(item.id)?(
           <div dir="rtl" className="much">
           <IconButton color="primary" onClick={() => {
            dispatch(increaseQuantity(item))
           }} sx={{ml:"10px"}}>
           <Add/>
             
           </IconButton>
           <StyledBadge badgeContent={producto(item)} color="primary"/>

           <IconButton color="primary" onClick={() => {
            dispatch(decreaseQuantity(item))
           }} sx={{mr:"10px"}}>
           <Remove/>
           </IconButton>
        </div>
        ):(
          <Button onClick={() => {
            dispatch(addToCart(item))
          }} sx={{textTransform:"capitalize",lineHeight:1.1,p:1}} variant="contained" color="primary">
            Add to cart
          </Button>
        )}
        <Typography variant="body1" color='error' >${item.price}</Typography>
      </CardActions>
      
    </Card>
    )
  })}
    
    </Stack>
  );
}
}

export default Home;

