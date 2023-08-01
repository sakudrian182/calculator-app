import React from "react";
import Button from "./Button";

const Functions = ({onContentClear,onDelete}) =>{
    return(
            <Button text="clear" clickHandler={onContentClear}/>
            <Button text="&larr;" clickHandler={onDelete}/>
        </section>
    )
}

export default Functions;