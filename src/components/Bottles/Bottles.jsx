import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    // step 3 if you want to load data make use State
    const [bottles, setBottles] = useState([]);

    // step 4 for loading data from json make useEffect
    useEffect(()=>{
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    },[]);
    
    
    return (
        <div>
            {/* step 5 now call the bottles from here to check */}
            <h2>Bottles here : {bottles.length}</h2>
            <div className="bottle-container">
            {
                // step 7 map the bottle and add Bottle component and send the data
                bottles.map(singleBottle => <Bottle
                key={singleBottle.id} 
                bottle={singleBottle}>
                </Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;