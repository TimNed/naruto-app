import React from "react";
import "./card.css";

type Props = {
  image: string;
  characterName: string;
};
export function Card({ image, characterName }: Props) {
  return (
    <div className="card">
      <div className="img-div positioning">
        <img src={image} />
      </div>
      <div className="card-container positioning">
        <p>{characterName}</p>
      </div>
    </div>
  );
}
