import { useEffect, useState } from "react";
import styles from "/src/Pages/Home.module.css"

export const Home = () =>{
    const[products, setProduct] = useState([]);
    const[error,setError] = useState("")

        const url = "http://localhost:8080/products"
        const getData = async () => {
            try{
                
                const res = await fetch(url);
                const data = await res.json();
                setProduct(data);;
            }catch(err){
                console.log(err)
                setError("Some this went wrong")
            }
        }
        useEffect(()=>{
            getData()
        },[])

        if(error){
            return <h1>{error}</h1>
        }


    return(
        <>

            <div>
                {
                products.map(product =>
                <div className={styles.card} key={product.product_id}>
                    <img className={styles.image} src={`http://localhost:8080/Images/${product.image}`} alt={product.product_name} />
                    <p>Name : {product.product_name} </p>
                    <p>Price : {product.price} </p>
                    <button>Add Cart</button>
                </div> )
                }
            </div>


            
        </>
    );
}