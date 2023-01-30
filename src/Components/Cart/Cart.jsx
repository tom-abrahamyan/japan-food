import React, {useContext} from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

function Cart(props){
    const cartContext = useContext(CartContext);
    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }
    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id)
    }

    const cartItems = <ul className={styles['cart-items']}>
        {
            cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={addCartItemHandler.bind(null, item)}
                    onRemove={removeCartItemHandler.bind(null, item.id)}
                />
            ))
        }
    </ul>

    return(
        <Modal onHideCart={props.onHideCart}>

            {cartItems}
            <div className={styles.total}>
                <span>Ընդհանուր</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Փակել</button>
                {hasItems && <button className={styles.button}>Պատվիրել</button>}
            </div>
        </Modal>
    )
}

export default Cart;