import "./character-image.css";

type characterProps = {
    image: string,
    id: number;
}

export function CharacterImage({image, id}:characterProps) {
    return (
    <div className="img-section">
        <div className="img-header">
            <a href="#">
                <div className="back-link">
                    <span className="material-symbols-outlined">
                        chevron_left
                        </span>Narutodex
                </div>
            </a>
            <div className="number">{id}</div>
        </div>
        <div className="img-div">
            <img src={image}/>
        </div>
    </div>
    );
}