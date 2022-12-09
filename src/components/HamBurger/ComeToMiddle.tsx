import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Style/ComeToMiddle.css'

function ComeToMiddle(): JSX.Element {
    
    const [classForActive, setClassForActive] = useState(false);
    const setActive = () => {
        setClassForActive((classForActive: Boolean) => !classForActive);
    };
    return (
        <div className={`btn ${classForActive ? 'active' : 'not-active'}`} onClick={setActive}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default ComeToMiddle