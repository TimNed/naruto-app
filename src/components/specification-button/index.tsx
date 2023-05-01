import React from "react";
import "./styles.css";

export function SpecsButton ({specification}:any) {
    return(
        <div className="specification-button">{specification}</div>
    );
}