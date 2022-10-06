import './Column.css';
import React, {useState} from 'react';
import Popup from './Popup';

const Column = (props) => {
    const [seen, setSeen] = useState(false);
    const {imgSrc, desc, alt, title} = props;

    const togglePop = () => {
        setSeen(!seen);
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
          togglePop();
        }
      }
    
    return (
        <div tabIndex="0" className='Column' onKeyPress={handleKeyPress}>
            {seen ? <Popup toggle={togglePop} desc={desc}/> : null}
            <img alt={alt}
                src={imgSrc}
                onClick={() => togglePop()}s
                /> 
            <h4> {title} </h4>
        </div>
    )
};

export default Column;