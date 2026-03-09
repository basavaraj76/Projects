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
    const openLoginPage = () => {
        <LoginPage></LoginPage>
    }
    return(
        <button style={styles} onClick={openLoginPage}>Login</button>
    );
}