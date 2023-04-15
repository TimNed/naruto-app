import React from "react";
import "./styles.css";

export function specsButton ({specification}:any) {
    return(
        <div className="specification-button">{specification}</div>
    );
}