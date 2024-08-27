import { renderProducts } from "./asset/helpers/renderProducts.js";
import { search } from "./asset/js/search.js";
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Retrieve list of categories
    let se_categories = new Set();
    data.products.forEach((item) => {
      se_categories.add(item.category);
    });
    // console.log(se_categories);
    const listCategories = document.querySelector(".categories");
    se_categories.forEach((category) => {
      // console.log(category);
      const html = `
				<button class="button">${category}</button>
			`;
      listCategories.innerHTML += html;
    });

    // Retrieve list of products
    const Products = document.querySelector(".products");
    const products = data.products;
    Products.innerHTML = renderProducts(products);

    // Search
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      search(products, e);
    });
  });
