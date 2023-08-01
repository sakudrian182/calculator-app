import React from 'react';
import Button from './Button';

const MathOperations = ({onClickOperation,onClickEqual}) => {
    return (
        <section className='math-operations'>
            <Button text={"+"} clickHandler={(text)=>onClickOperation(text)} />
            <Button text={"-"} clickHandler={(text)=>onClickOperation(text)} />
            <Button text={"*"} clickHandler={(text)=>onClickOperation(text)} />
            <Button text={"/"} clickHandler={(text)=>onClickOperation(text)} />
            <Button text={"="} clickHandler={(text)=>onClickEqual(text)} />
        </section>
    );
};

export default MathOperations;