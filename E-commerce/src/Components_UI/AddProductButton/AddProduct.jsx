import { Link } from "react-router-dom"
export const AddProduct= () =>{
    const styles ={
        border: "none",
        height: "36px",
        padding: "0 18px",
        backgroundColor: "white",
        color: "#f05e1f",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        margin:"10px"
    }
    return(
        <>
            <Link to="/addproduct">
                <button style={styles}>Add Product</button>
            </Link>
        </>
    )
}