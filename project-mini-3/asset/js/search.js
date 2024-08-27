import { renderProducts } from "../helpers/renderProducts.js";

export const search = (products, e) => {
  const Products = document.querySelector(".products");
  let keyword = e.target[0].value;
  const regex = new RegExp(keyword, "i");

  const newProducts = products.filter((item) => {
    return item.title.match(regex);
  });
  
  Products.innerHTML = renderProducts(newProducts);
};
