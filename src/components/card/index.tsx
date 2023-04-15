import React from "react";
import "./card.css";

export function Card({image, characterName}:any) {
    return (
        <div className="card">
            <div className="img-div positioning"><img src={image}/></div>
            <div className="card-container positioning">
                <p>{characterName}</p>
            </div>
        </div>
    );
}