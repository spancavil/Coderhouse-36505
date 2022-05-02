import { collection, getDocs, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/config";

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(()=> {

        (async ()=>{
            const queryCollection = query(collection(db, "productos"))
            const queryCollectionCategories = query(collection(db, "categories"))
            const querySnapshot = await getDocs(queryCollection);
            const querySnapshotCategories = await getDocs(queryCollectionCategories)
            const productos = []
            querySnapshot.forEach((doc)=> {
                const producto = {id: doc.id, ...doc.data()}
                productos.push(producto)
            })

            const categories = []
            querySnapshotCategories.forEach((doc)=> {
                const category = {id: doc.id, ...doc.data()}
                categories.push(category)
            })

            setProducts([...productos])
            setCategories([...categories])
        })()

    }, [])

    console.log(products);
    console.log(categories)

    return(
        <Shop.Provider value={{products}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;