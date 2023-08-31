import React from 'react';

const Shop = (props) => {
    // const cards = props.card
    // const all = cards.reduce((all,prud)=> all + prud.price,0)

    let all = 0
    for (let index = 0; index < props.card.length; index++) {
        const element = props.card[index];
        all = all + element.price
        
    }
  let shifing = 0
  if(all>200){
    shifing = 50

  }else {
    shifing = 0
  }
  let vat = 0
  if(all>800){
    vat= 10
  }else if(all>500){
    vat = 6.55
  }
  else{
    vat = 0
  }
    return (
        <div style={{border:'1px solid red'}}>
          <h1>Order sumary</h1>
            <h1>count {props.card.length}</h1>
            <h1>totall price{all + shifing + vat}</h1>
            <h1>shiping{shifing}</h1>
            <h3>tax & vat{vat}</h3>
            <button>submit</button>
            
        </div>
    );
};

export default Shop;