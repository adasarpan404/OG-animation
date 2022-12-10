import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Style/ComeToMiddle.css'


function ComeToMiddle(): JSX.Element {

    const [classForActive, setClassForActive] = useState(false);


    const setActive = () => {
        // reversing the boolean
        setClassForActive((classForActive: Boolean) => !classForActive);
    };
    return (
        <div className={`btn ${classForActive ? 'active' : 'not-active'}`} onClick={setActive}>
            <div className='comeToMiddle firstChild'></div>
            <div className='comeToMiddle secondChild'></div>
            <div className='comeToMiddle thirdChild'></div>
        </div>
    );
}

export default ComeToMiddle