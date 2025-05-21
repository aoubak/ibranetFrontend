// menu toggale

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    // menuToggle.classList.toggle("active");
});


// getting elements form index.html
const product_cards = document.querySelectorAll(".product_cards");

async function fetchProducts() {
    try {
        
        const response = await fetch('https://dummyjson.com/products');
        const {products} = await response.json();
        console.log(products);

        products.forEach((product, index) => {




        });


    } catch (error) {
        console.error("Error fetching products:", error);
        
    }
}

fetchProducts();


