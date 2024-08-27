import { renderProducts } from "../helpers/renderProducts.js";

export const category = (products, category) => {
  const Products = document.querySelector(".products");
 
  const newProducts = products.filter((item) => {
    return item.category == category;
  });
  
  Products.innerHTML = renderProducts(newProducts);
};
