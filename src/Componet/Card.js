import React from 'react';

const Card = (props) => {

 
  
  
    
    const {images,price,brand,title}= props.produc
    return (
        <div className='productItem' style={{border:'1px solid red'}}>
            <div className="product">
            <img style={{width:'300px',height:'300px'}} src={images[0]} alt="" />
            </div>
            <div className="contaienr">
                <h1>{brand}</h1>
                <h1>{title}</h1>
                <h1>discount {}</h1>
                <h1>price ${price}</h1>
                <button onClick={()=>props.handle(props.produc)}>add now</button>

            </div>
        </div>
    );
};

export default Card;