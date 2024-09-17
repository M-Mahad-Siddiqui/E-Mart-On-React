const cart = [];

// Define the reducer function
const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            // Check if the product already exists in the cart
            { const existingProduct = state.find((x) => x.id === product.id);

            if (existingProduct) {
                // If the product exists, update its quantity
                return state.map((x) =>
                    (x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
                );
            } else {
                // If the product does not exist, add it to the cart with quantity 1
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ];
            } }

        case "DELETEITEM":
            // Find the existing product in the cart
            { const productToDelete = state.find((x) => x.id === product.id);

            if (productToDelete) {
                if (productToDelete.qty === 1) {
                    // If the product quantity is 1, remove it from the cart
                    return state.filter((x) => x.id !== product.id);
                } else {
                    // If the product quantity is greater than 1, decrease the quantity
                    return state.map((x) =>
                        (x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
                    );
                }
            }
            // If the product does not exist in the cart, return the unchanged state
            return state; }

        default:
            // Return the current state if the action type is not recognized
            return state;
    }
};

export default handleCart;
