document.addEventListener("DOMContentLoaded", () => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const itemName = params.get("item");
    const itemPrice = params.get("price");

    // Fill in form fields if they exist
    const nameField = document.querySelector("#food-item");
    const priceField = document.querySelector("#food-price");

    if (itemName && nameField) {
        nameField.value = itemName;
    }
    if (itemPrice && priceField) {
        priceField.value = itemPrice;
    }
});
