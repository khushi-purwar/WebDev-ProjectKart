import { useState } from 'react';
import { useQuery } from 'react-query';
//components 
import Item from "./Item/Item";
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from "@material-ui/core/Badge";
//styles
import { Wrapper, StyledButton } from './App.styles';
//Types
export type CartItemType  = {
  id: number;
  catergory: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen ] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => 
  items.reduce((ack: number, item) => ack + item.amount, 0); //total amount in the cart for each item, starts with 0 then adds amount of each item

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //item already added in the cart
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      //looping through all the items
      if(isItemInCart) {
        //update the amount of that specific item by mapping through the items
        return prev.map(item => 
          item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1}
          : item
        );
      }
      //Item added for the first time
      //return all the previous items to the cart
      return [...prev, { ...clickedItem, amount: 1}];
    });
    //setting the state
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => //previous state
      prev.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount -1}];
          //check if the amount of the item is 1 otheerwise we just remove it from the array 
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]) //array of cart item type
    );
  };

  if(isLoading) return <LinearProgress /> //progress bar
  if (error) return <div>Something went wrong ...</div>
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
       <Cart cartItems = {cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
      </Grid>
    </Wrapper>
  );
  //<div className="App">Start</div>
};

export default App;
