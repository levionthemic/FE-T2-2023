export const renderProducts = (products) => {
  let html = "";
  for (var item of products) {
    html += `
				<div class="item">
					<div class="inner-image">
						<img src=${item.thumbnail} alt="">
					</div>
					<div class="inner-content">
						<h3 class="title">${item.title}</h3>
						<ul>
							<li class="price">${item.price}$</li>
							<li class="stock">Còn lại: ${item.stock} sp</li>
						</ul>
					</div>
      	</div>
			`;
  }
  return html;
};
