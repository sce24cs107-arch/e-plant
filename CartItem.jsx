
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalPrice = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>Paradise Nursery - Shopping Cart</h1>

      {items.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "15px",
              borderRadius: "10px"
            }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>

              <button
                onClick={() =>
                  dispatch(updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                  }))
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span> {item.quantity} </span>

              <button
                onClick={() =>
                  dispatch(updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  }))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(removeItem(item.id))
                }
                style={{ marginLeft: "15px" }}
              >
                Remove
              </button>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default CartItem;
