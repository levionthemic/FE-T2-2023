import { useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "./CartItem";

function CardList() {
  const cart = useSelector(state => state.cartReducer);

  return (
    <>
      {cart.map(item => (
        <CartItem item={item} key={item.id}/>
      ))}
    
    </>
  )
}

export default CardList;