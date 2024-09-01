import { useEffect, useState } from "react";

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
        <>Đang tải dữ liệu...</>
      ) : (
        <ul>
          {products.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default ProductState;
