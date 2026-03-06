import styles from "/src/Components_UI/SearchBar/Search.module.css"
export const Search = ()=>{
    return(
        <>
            <div className={styles.bar}>
                <input type="text" name="" id="" className={styles.search} placeholder="Search Product" />
                <button className={styles.btn}>Search</button>
            </div>
            
        </>
    )
}