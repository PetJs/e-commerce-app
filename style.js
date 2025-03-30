const variations = [
    { id: 1, name: "beats-black", image: "beats/pure-black.jfif" },
    { id: 2, name: "beats-black-gold", image: "beats/black-gold.jfif" },
    { id: 3, name: "beats-lilac", image: "beats/lilac.jfif" },
    { id: 4, name: "beats-orange", image: "beats/orange.jfif" },
    { id: 5, name: "beats-blue", image: "beats/blue.jfif" },
    { id: 6, name: "beats-white", image: "beats/pure-white.jfif" },
    { id: 7, name: "beats-red", image: "beats/red.jfif" },
    { id: 8, name: "beats-sky-blue", image: "beats/sky-blue.jfif" },
    { id: 9, name: "beats-white-gold", image: "beats/white-gold.jfif" },
    { id: 10, name: "beats-special-edition", image: "beats/special-edition.jfif" },
];

const selectElement = document.getElementById("product-select");
const productImage = document.getElementById("product-image");
const addToCartBtn = document.getElementById("cart");
const cartContainer = document.getElementById("cart-items");
const cart = [];
const checkoutBtn = document.getElementById("checkout-btn");
const modal = document.getElementById("checkout-modal");
const confirmBtn = document.getElementById("confirm-btn");
const closeModal = document.getElementById("close-modal");

// Update image when selection changes
selectElement.addEventListener("change", function () {
    const selectedValue = this.value;
    const selectedVariation = variations.find(variation => variation.name === selectedValue);
    
    if (selectedVariation) {
        productImage.src = selectedVariation.image;
        productImage.alt = selectedVariation.name;
    }
});

// Add to cart
function addToCart() {
    const selectedValue = selectElement.value;
    const selectedVariation = variations.find(variation => variation.name === selectedValue);

    if (selectedVariation) {
        const cartItem = {
            id: selectedVariation.id,
            name: selectedValue.replace("beats-", "").replace("-", " ").toUpperCase(), // Format the name
            image: selectedVariation.image,
            quantity: 1
        };

        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.id === cartItem.id);

        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push(cartItem); 
            console.log(cart)
        }

        updateCart();
    } 
}

// Update Cart 
function updateCart() {
    cartContainer.innerHTML = ""; 
    cart.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} - $120 (x${item.quantity})</p>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
}

checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

confirmBtn.addEventListener("click", function () {
    if (cart.length === 0) {
        alert("No item selected for checkout.");
    } else {
        const purchasedItems = cart.map(item => item.name).join(", ");
        alert(`${purchasedItems} has been purchased, to be delivered in 3 days.`);
        cart.length = 0; // Clear cart after purchase
        updateCart();
    }
    modal.style.display = "none";
});

addToCartBtn.addEventListener("click", addToCart);
