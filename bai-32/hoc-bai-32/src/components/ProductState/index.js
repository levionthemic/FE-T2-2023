import { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./Product.scss";

function ProductState() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        });
    };
    setTimeout(() => {
      fetchApi();
    }, 3000);
  }, []);

  console.log(products);
  console.log(loading);

  return (
    <>
      {loading ? (
        <>
          <div className="product__list">
            {[...Array(30)].map((_, index) => (
              <div className="product__item" key={index}>
              <Skeleton className="product__image"/>
              <Skeleton className="product__title"/>
              <Skeleton className="product__image--circle" />
            </div>
            ))}
            
          </div>
        </>
      ) : (
        <div className="product__list">
          {products.map((item) => (
            <div className="product__item" key={item.id}>
              <img className="product__image" src={item.thumbnail} alt={item.title} />
              <h3 className="product__title">{item.title}</h3>
              <img className="product__image--circle" src={item.thumbnail} alt={item.title} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductState;
