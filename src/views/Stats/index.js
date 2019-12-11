import React, { useContext, useState } from 'react'
import cardSchemeContext from "../../context/cardSchemeContext";
import { NavLink } from 'react-router-dom';

export default function Stats() {

    const { generateStatistics, statistics } = useContext(cardSchemeContext)
    const { payload } = statistics;
    const [ start, setStart ] = useState(0);
    const [ limit, setLimit ] = useState(0);
    
    let results = Object.keys(payload).map((item, i) => <p key={i}>{item}: {payload[item]}</p>);

    function handleStartChange(e) {
        setStart(e.target.value);
      }

    function handleLimitChange(e) {
        setLimit(e.target.value);
      }

    
     function handleSubmit(e) {
        e.preventDefault();
        generateStatistics(start, limit);
        }

    return (
        <>
            <div className="formBox">
                <form onSubmit={handleSubmit}>
                    <p className="inputBox">
                        <input type="number" onChange={handleStartChange} required />
                        <label htmlFor="start">Start:</label>
                        <input type="number" onChange={handleLimitChange} required />
                        <label htmlFor="limit">Limit:</label>
                    </p>
                    <button>View Stats</button>
                </form>
            </div>

             <div id="results">

                 {results}

            </div> 

            <NavLink to="/" className="links">Verify Card</NavLink>
        </>

    )
}
