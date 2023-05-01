import React from "react";
import "./styles.css";

export function StatsBar ({header, percentage}:any) {
    return(
        <div className="bar-container">
            <div className="header">{header}</div>
            <div className="bar">{percentage}
                <div className="percentage"></div>
            </div>
        </div>
    );
}