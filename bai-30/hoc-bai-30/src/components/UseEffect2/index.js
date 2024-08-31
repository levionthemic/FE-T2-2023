import { useState, useEffect } from "react";
import "./Product.scss";

function UseEffect2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);

  return (
    <>
      <div className="product__list">
        {data.map((item) => {
          return (
            <div className="product__item" key={item.id}>
              <div className="product__image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <h3 className="product__title">{item.title}</h3>
              <div className="product__price">{item.price}$</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UseEffect2;
