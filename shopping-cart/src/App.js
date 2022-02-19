import React, { useState } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import { productList  } from './constants';


const App =() =>{
  const [cartItems, setCartItems ] = useState([]);
  const getNextId =()=> {
    let max = 0;
    
    for(let i = 0; i<=cartItems.length; i++){
      if(i >=max){
        max = i;
      }
      
    }
    return max+1;
  }

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
   
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id  ?{ ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      const max = getNextId();
      setCartItems([...cartItems, { ...product, quantity: 1, orderId:max }]);
    }
    console.log(cartItems);
    
  };

  const removeItem = (orderId) => {
    const newList = cartItems.filter((item)=>{
      return item.orderId !== orderId;
     })
     setCartItems(newList); 
      
   };

   /*const totalCost =()=>{
    return cartItems.reduce(
      (sum, { price },{quantity}) => sum + price *quantity ,
      0
    );
   }*/
  return (
    <div className="App">
      <Products
      products ={productList}
      addToCart={addToCart}
      />
      <Cart
      cartItems = {cartItems}
      removeItem = {removeItem}
      
      />
      
    </div>
  );
}

export default App;
