import logo from "/src/assets/Logo-Mystore.png"

export const Logo = () => {

    const styles = {
        width: "150px",
        height: "auto",
        filter: "brightness(0) invert(1)"
    }

    return(
        <>
            
            <img src={logo} alt="Logo_mystore" style={styles} />
            
        </>
    );
}