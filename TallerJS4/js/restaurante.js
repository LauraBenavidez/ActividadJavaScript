document.addEventListener("DOMContentLoaded", function () {
    // Cuando la página web esté completamente cargada, se ejecutará lo siguiente:

    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    // Encontramos tres lugares importantes en la página:
    // - "orderForm" es donde se hacen los pedidos.
    // - "orderSummary" es donde se muestra lo que pediste.
    // - "totalPrice" es donde se muestra cuánto cuesta en total.

    let total = 0;
    // Al principio, no hemos gastado dinero.

    orderForm.addEventListener("submit", function (event) {
        // Si intentamos enviar el pedido, detenlo.
        event.preventDefault();
    });

    document.getElementById("add-to-order").addEventListener("click", function () {
        // Cuando hacemos clic en el botón "Agregar al pedido", hacemos lo siguiente:

        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        // 1. Miramos qué comida y cuánta comida eligieron.
        // 2. Miramos qué bebida y cuánta bebida eligieron.

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

        // 3. Descubrimos cuánto cuesta la comida y la bebida.

        const subtotal = (dishPrice * dishQuantity) + (drinkPrice * drinkQuantity);

        // 4. Calculamos cuánto cuesta en total.

        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = ` ${dish} (x${dishQuantity}), ${drink} (x${drinkQuantity})`;

        // 5. Mostramos lo que pidieron en la lista de pedidos.

        orderSummary.appendChild(orderItem);

        // 6. Sumamos el costo al total.
        total += subtotal;
        totalPrice.textContent = total.toFixed();
    });
});
    
