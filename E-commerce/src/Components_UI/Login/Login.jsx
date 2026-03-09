import { Link, useNavigate } from "react-router-dom"
import { LoginPage } from "../../Pages/Login/LoginPage"
export const Login = () =>{
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
        <Link to="/login">
        <button style={styles} >Login</button>
        </Link>
    );
}