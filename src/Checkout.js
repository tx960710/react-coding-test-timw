import { useEffect, useState } from "react";
import './App.css';

const Checkout = () => {
  const price = {
    'apple': 0.6,
    'orange': 0.25
  };
  const [cart_data, setCart] = useState("");
  const [total_val, setTotal] = useState(0.0);
  const [offer1, setOffer1] = useState(false);
  const [offer2, setOffer2] = useState(false);

  // input handling: setting the input value state
  // and basic cleaning + splitting
  const handleInput = (e) => {
    setCart(e.target.value);
  };
  const input_cleaning = (cart_data) => {
    return cart_data.toLowerCase().split(",");
  };

  // handler to toggle offer1&2's on/off
  const offer1Handler = () => {
    setOffer1(!offer1);
  };
  const offer2Handler = () => {
    setOffer2(!offer2);
  };

  // calcualte the subtotal with no offers
  const getNormalSubtotal = (item_name, arr) => {
      let sub_total = 0.0;
      for (let elem of arr) {
        if(elem === item_name){
            sub_total += price[elem];
        }
      }
      return sub_total;
  }

  // calculate subtotal of apple with offer 1 on 
  const getAppleOffer = (arr) => {
    let appleCount = 0;
    for (let elem of arr){
        if(elem === "apple") {
            appleCount += 1;
        }
    };
    return price.apple * (Math.floor(appleCount/2) + appleCount % 2) 
  }
  // calculate subtotal of orange with offer 2 on 
  const getOrangeOffer = (arr) => {
    let orangeCount = 0;
    for (let elem of arr){
        if(elem === "orange") {
            orangeCount += 1;
        }
    }
    return price.orange * (2 * Math.floor(orangeCount/3) + orangeCount % 3)
  }
  // calculate the total and update to display new total
  const getTotal = () => {
    setTotal(0.0);
    let cleaned_str = input_cleaning(cart_data);
    let res = 0.0;
    if(offer1){
        res += getAppleOffer(cleaned_str);
    }else{
        res += getNormalSubtotal("apple", cleaned_str);
    }
    if(offer2){
        res += getOrangeOffer(cleaned_str);
    }else{
        res += getNormalSubtotal("orange", cleaned_str);
    }
    setTotal(res.toFixed(2));
  };
  // set to update total if any offer is started or the input changes
  useEffect(()=>{
      getTotal();
  }, [offer1, offer2, cart_data])

  return (
    <div className="App">
      <h1>Checkout System</h1>
      <input
        className="cart_input"
        value={cart_data}
        placeholder="Input the cart data comma separated"
        onChange={handleInput}
      ></input>
      <h3>Your total is: ${total_val} </h3>
      {/* <button onClick={getTotal}>Calculate Total</button> */}
      <div>
        <input id="o1" type="checkbox" onClick={offer1Handler}></input>
        <label for="o1">
          {offer1 === false ? "Offer 1 off" : "Offer 1 on"}
        </label>
        <input id="o2" type="checkbox" onClick={offer2Handler}></input>
        <label for="o2">
          {offer2 === false ? "Offer 2 off" : "Offer 2 on"}
        </label>
      </div>
    </div>
  );
};

export default Checkout;
