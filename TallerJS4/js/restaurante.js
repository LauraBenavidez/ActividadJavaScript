document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    let total = 0;

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.getElementById("add-to-order").addEventListener("click", function () {
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        const dishPrice = {
            "Pizza hawaina": 12000,
            "Pizza con pollo": 13000,
            "Pizza mixta": 14000,
            "Pizza mexicana": 15000,
            "Pizza vegetariana": 13000,
            "Pizza de tomate": 12000,
        }[dish] || 0;

        const drinkPrice = {
            "Mora": 4200,
            "Lulo": 5000,
            "Maracuya": 4500,
            "Cerezada": 8000,
        }[drink] || 0;

        const subtotal = (dishPrice * dishQuantity) + (drinkPrice * drinkQuantity);

        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = ` ${dish} (x${dishQuantity}), ${drink} (x${drinkQuantity})`;

        orderSummary.appendChild(orderItem);

        total += subtotal;
        totalPrice.textContent = total.toFixed();
    });
});
    
