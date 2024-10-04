import React, { useState } from "react";

const Greeting = ({message, OtraProp}) => {

    const [count, setCount] = useState(0)
    const [countHover, setCountHover] = useState(0)
    const [buttonText, setButtonText] = useState("Hola!")

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

    const buttonClick = () => {
        setButtonText("Chau!")
    }
    
    const handleHover =() => {
        setCountHover(prevCountHover => prevCountHover +1)
    }

    return (
        <>
            <h1>{message} {OtraProp}</h1>
            <button onClick={handleClick}>Hola</button>
            <span> ( {count} ) </span>
            <div style={{width: 300, height:50, backgroundColor: "gray", padding:10}} onMouseEnter={handleHover}>
                <span>{countHover}</span>
            <button onClick={buttonClick}>{buttonText}</button>
            </div>
        </>
    );
};

export default Greeting;
