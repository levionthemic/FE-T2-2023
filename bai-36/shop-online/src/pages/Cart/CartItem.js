import { useDispatch } from "react-redux";
import { deleteItem, upDateQuantity } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
  const { item } = props;

  const inputRef = useRef();

  const dispatch = useDispatch();
  const handleUp = () => {
    dispatch(upDateQuantity(item.id));
    inputRef.current.value = item.quantity;
  };

  const handleDown = () => {
    if (item.quantity > 1) {
      dispatch(upDateQuantity(item.id, -1));
      inputRef.current.value = item.quantity;
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  }

  return (
    <>
      <div className="cart__item">
        <div className="cart__image">
          <img src={item.info.thumbnail} alt={item.info.title} />
        </div>
        <div className="cart__content">
          <h4 className="cart__title">{item.info.title}</h4>
          <div className="cart__price-new">
            {(
              (item.info.price * (100 - item.info.discountPercentage)) /
              100
            ).toFixed(2)}
            $
          </div>
          <div className="cart__price-old">{item.info.price}$</div>
        </div>
        <div className="cart__quantity">
          <button onClick={handleDown}>-</button>
          <input ref={inputRef} defaultValue={item.quantity} />
          <button onClick={handleUp}>+</button>
        </div>
        <button onClick={handleDelete}>Xoá</button>
      </div>
    </>
  );
}

export default CartItem;
