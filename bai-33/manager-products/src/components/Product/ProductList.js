import { useEffect, useState } from "react";

function ProductList(props) {
  const [data, setData] = useState([]);

  const { reload } = props;

  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3002/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data.reverse());
        });
    };
    fetchApi();
  }, [reload]);

  console.log(data);

  return (
    <>
      <div className="product__list">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h4 className="product__title">{item.title}</h4>
            <p className="product__price">{item.price}$</p>
            <p className="">{item.discountPercentage}%</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
