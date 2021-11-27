import { useEffect, useState } from 'react';


const useProducts = () => {
    const [products,setProducts]=useState()
    useEffect(()=>{
        fetch('https://mighty-thicket-32319.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[])

    return  {
        products
        
    };
};

export default useProducts;