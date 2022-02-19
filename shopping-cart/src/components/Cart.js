

const Cart = ({removeItem,  cartItems, quantity})=>{

    const deleteItem = (orderId)=>{
    
        removeItem(orderId);
    }
    
    const totalCost= cartItems.reduce((acc,product) =>{
        
        return acc + product.price*product.quantity
    },0);
   
    const totalProducts = cartItems.reduce((acc, item)=>{
        return acc+item.quantity
    }, 0);

    console.log("Total cost: "+totalCost)
    return<div className="container">
            {cartItems.length === 0 ?(
            <h2>Cart is empty</h2>
            ):(<div>
            <h2>Products in cart</h2>
            <table className="table">
                
            <thead>
            <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Id</th>
            <th scope = "col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((item, index)=>{
                const {name, price, url,  quantity, orderId}= item;
                return<tr key={item.id+index}>
                <th scope="row">{name}</th>
            <td>{price}</td>
            <td><img  src={url} alt={name} className="item-img"/></td>
            <td>{quantity}</td>
            <td>{orderId}</td>
            <td><button onClick={() => deleteItem(orderId)} className="remove">
                        Remove
                    </button></td>
                </tr>
            })}
            </tbody>
            </table>
            </div>)}
            <p className="mt-3">
            Total of
      <strong> {totalProducts}</strong> products, with a cost of
      <strong> {totalCost}</strong> Lei
    </p>
          </div>
}
export default Cart;