import { useState } from 'react';
import './Cal.css';

const Cal = () => {

    const [displayValue, setDisplayValue] = useState('');
    const [firstValue, setFirstValue] = useState(null);
    const [isAdd, setIsAdd] = useState(false);
    const [isSub, setIsSub] = useState(false);
    const [isMul, setIsMul] = useState(false);
    const [isDiv, setIsDiv] = useState(false);

    const handleClick = (value) => {
        setDisplayValue(displayValue + value);
    } 

    const handleAdd = () => {

        setFirstValue(parseFloat(displayValue));
        setDisplayValue('');
        setIsAdd(true); 
    };

    const handleSub = () => {

        setFirstValue(parseFloat(displayValue));
        setDisplayValue('');
        setIsSub(true); 
    };

    const handleMul = () => {

        setFirstValue(parseFloat(displayValue));
        setDisplayValue('');
        setIsMul(true); 
    };

    const handleDiv = () => {

        setFirstValue(parseFloat(displayValue));
        setDisplayValue('');
        setIsDiv(true); 
    };

    const handleClear = () => {

        setDisplayValue('');
        setFirstValue(null);
        setIsAdd(false);
    }

    const handleOneClear = () => {
        displayValue.toString();
        let removeOne = displayValue.substring(0, displayValue.length-1);
        setDisplayValue(removeOne);
    }

    const handleEquals = () => {

        if(isAdd && firstValue != null){

            const add = firstValue + parseFloat(displayValue);   
            setDisplayValue(add); 
            setFirstValue(null);
            setIsAdd(false); 
        }else if(isSub && firstValue != null){

            const sub = firstValue - parseFloat(displayValue);
            setDisplayValue(sub); 
            setFirstValue(null);
            setIsSub(false);
        }else if(isMul && firstValue != null){
            
            const mul = firstValue * parseFloat(displayValue);
            setDisplayValue(mul);
            setFirstValue(null);
            setIsMul(false);
        }else if(isDiv && firstValue != null){

            const div = firstValue / parseFloat(displayValue);
            setDisplayValue(div);
            setFirstValue(null);
            setIsDiv(false);
        }
    };

    return(
        <>
            <h1>Calculator</h1>
            <div className="cal">
            <h1 type="text" id="display" disabled>{displayValue}</h1>
                <div className="buttons">
                    <button className='clear' onClick={handleClear}>C</button>
                    <button onClick={handleDiv}>÷</button>
                    <button onClick={() => handleOneClear('')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height='30'><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7L288 480l9.4 0L512 480c17.7 0 32-14.3 32-32s-14.3-32-32-32l-124.1 0L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416l-9.4 0-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg>
                    </button>
                    <button onClick={handleSub}>-</button>
                    <button onClick={handleAdd}>+</button>
                    <button onClick={handleMul}>X</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button className="equal" onClick={handleEquals}>=</button>
                </div>
            </div>
        </>
    )
}
export default Cal;