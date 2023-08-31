import React, { useEffect, useState } from 'react';
import Card from './Card';
import Shop from './Shop';

const Product = () => {
    const [user,setuser]= useState({products:[]})
    const [card,setcard]= useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setuser(data))
    })
    const handle = (produc)=>{
       const newcard = [...card,produc]
       setcard(newcard)
    }
    return (
        <div className='container' style={{display:'flex'}}>
            <div className="product">
            {
                user.products.map(products=><Card produc={products} handle={handle}></Card>)
            }
            </div>
            <div className="card" style={{width:'50%'}}>
               <Shop card={card}></Shop>
            </div>
            
        </div>
    );
};

export default Product;