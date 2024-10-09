import { Rate } from "antd";

import "./CardItem.scss";

function CardItem(props) {
  const { product } = props;
  return (
    <>
      <div className="wrap">
        <div className="wrap__image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="wrap-content">
          <Rate />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </div>
    </>
  )
}

export default CardItem;