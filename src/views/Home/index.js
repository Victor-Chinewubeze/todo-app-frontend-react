import React, { useContext, useState } from 'react';
import cardSchemeContext from "../../context/cardSchemeContext";
import { NavLink } from 'react-router-dom';


export default function Home() {
    const { performCardVerification, cardVerification } = useContext(cardSchemeContext)
    const { payload } = cardVerification;
    const { scheme, type, bank } = payload
    const [ cardNumber, setCardNumber ] = useState(0);

    function handleChange(e) {
        setCardNumber(e.target.value);
      }
    
     function handleSubmit(e) {
        e.preventDefault();
        performCardVerification(cardNumber);
        console.log(cardNumber);
        }
    return (
        <>
            <div className="formBox">
                <form onSubmit={handleSubmit}>
                    <p className="inputBox">
                        <input type="number" onChange={handleChange} min="100000" required />
                        <label htmlFor="cardNumber">Card Number:</label>
                    </p>
                    <button>Verify</button>
                </form>
            </div>

            <div id="results">
                <p><b>Scheme: </b>{scheme}</p>
                <p><b>Type: </b>{type}</p>
                <p><b>Bank: </b>{bank}</p>
            </div>
            
            <NavLink to="/stats" className="links">Generate Statistics</NavLink>
        </>
    )
}
