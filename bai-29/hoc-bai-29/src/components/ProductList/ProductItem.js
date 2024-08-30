function ProductItem(props) {
  const { item } = props;
  return (
    <>
      <div className="product__item">
        <img
          className="product_image"
          src={item.image}
          alt={item.name}
          style={{ width: "100px" }}
        ></img>
        <h3 className="product__name">{item.name}</h3>
        <div className="product__price">Giá: {item.price}</div>
      </div>
    </>
  );
}

export default ProductItem;
