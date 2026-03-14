import { Logo } from "../Logo";
import styles from "/src/Components_UI/Header/Header.module.css"
import { Search } from "../SearchBar/Search";
import { Login } from "../Login/Login";
import { Cart } from "../Cart/Cart";
import { AddProduct } from "../AddProductButton/AddProduct";
export const Header = () =>{
    return(
        <>
            <div className={styles.header}>
                <Logo/>
                <Search/>
                <Login/>
                <AddProduct/>
                <Cart/>
                
            </div>
            
        </>
    );
}