import React from "react";

function UnderLineStyle(props) {
    const { theClass } = props
    return (
        <div className={theClass ? `${theClass} underLineStyle` : "underLineStyle"}>
        </div>
    );
}

export default UnderLineStyle;