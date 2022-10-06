import React from 'react';
import './Popup.css';
import {useRef, useEffect, useCallback} from 'react';
const Popup = (props) => {
    const ref = useRef(null);

    const handleClick = useCallback(() => {
        props.toggle();
    },[props]);
    
    useEffect(() => {
         const handleClickOutside = (e) => {
            if(ref.current && !ref.current.contains(e.target)){
                handleClick();
            }
        };
        document.addEventListener('keypress', handleClickOutside, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.removeEventListener('keypress', handleClickOutside, true);
        };
    },[ handleClick ]);
    

    const {desc} = props;
    return (
            <div ref={ref} onClick={() => handleClick()} className="modal_content">
                <p>{desc}</p>
            </div>
    )
};

export default Popup;