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

selectElement.addEventListener("change", function () {
    const selectedValue = this.value;
    const selectedVariation = variations.find(variation => variation.name.includes(selectedValue));
    
    if (selectedVariation) {
        productImage.src = selectedVariation.image;
        productImage.alt = selectedVariation.name;
    }
});
