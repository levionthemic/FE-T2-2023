import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import "./Product.scss";
import ProductItem from "./ProductItem";


function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="product">
        {products.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
}

export default Product;
