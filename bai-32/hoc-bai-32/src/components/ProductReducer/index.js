import { useEffect, useReducer } from "react";

const init = {
  products: [],
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return {
      products: action.products,
      loading: false,
    };
  } else {
    return state;
  }
};

function ProductReducer() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [data, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          // setProducts(data.products);
          // setLoading(false);
          dispatch({
            type: "SUCCESS",
            products: data.products,
          });
        });
    };
    setTimeout(() => {
      fetchApi();
    }, 3000);
  }, []);

  console.log(data);

  return (
    <>
      {data.loading ? (
        <>Đang tải dữ liệu...</>
      ) : (
        <ul>
          {data.products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductReducer;
