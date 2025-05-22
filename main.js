// menu toggale

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// getting elements form index.html
const product_cards = document.querySelector(".product_cards");

async function fetchProducts() {
    try {

        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        console.log(products);


        products.slice(0, 3).forEach(product => {
            const product_card = document.createElement("div");
            product_card.classList.add("card");
            product_card.innerHTML = `
                       <span>
                         ${product.availabilityStatus == 'In Stock'
                    ? `<span class="status in-stock"> In Stock </span> `
                    : `<span class="status out-stock"> Out Stock </span>`
                } 
                          </span>
                        <img src="${product.thumbnail}" alt="Product 1">
                        <h3>${product.title}</h3>
                        <p class="description">${product.description.slice(0, 50) + " ..."}</p>
                        <div class="stars_price">
                            <div class="price">
                                <span>
                                    $ ${product.price}
                                </span>
                            </div>
                            <div class="stars">
                                <span class="rating">
                                    ${"★".repeat(Math.round(product.rating))}
                                </span>
                                <span>
                                    ${"☆".repeat(Math.round(5 - product.rating))}
                                    
                                </span>
                            </div>

                        </div>

                    
            `;
            product_cards.appendChild(product_card);
        });

        products.slice(0, 3).forEach(product => {
            const news_section = document.querySelector(".news");
            const news_card = document.createElement("div");
            news_card.classList.add("news_card");
            news_card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
             <h2>${product.title}</h2>
             <p>${product.description}</p>
            `;

            news_section.appendChild(news_card);
        });


        const featured_products = document.querySelector(".featured_products");

        // Grid container
        const grid_container = document.querySelector(".grid-container");

        // First two products → BIG cards
        products.slice(0, 2).forEach(product => {
            grid_container.innerHTML += `
                <div class="card big">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="overlay">${product.title}</div>
                </div>
            `;
        });

        // Next products → SMALL cards (e.g., 3rd to 6th)
        products.slice(2, 6).forEach(product => {
            grid_container.innerHTML += `
                <div class="card small">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="overlay">${product.title}</div>
                </div>
            `;
        });

      featured_products.appendChild(grid_container);




    } catch (error) {
        console.error("Error fetching products:", error);

    }
}



fetchProducts();


