import { BsCart4 } from "react-icons/bs";
import styles from "/src/Components_UI/Cart/Cart.module.css"

export const Cart = () =>{
    
    return(
        <>
            <button className={styles.cart}><BsCart4 size={22} color="white"/></button>
        </>
    );
}