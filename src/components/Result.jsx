import React from "react";
import PropTypes from 'prop-types';

const Result = ({value}) =>{  
    //console.log("Componente Result",value);
    return(            
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.propTypes = {
    value:PropTypes.string.isRequired
}

export default Result;