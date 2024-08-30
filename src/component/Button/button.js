import React from "react";


const Button = (props) => {
        return (<div className="form-group">
         <button type="submit" className="proceed-btn">
            {props.name}
                </button>
        </div>)
}

export default Button;