import {CharacterImage} from "../../components/character-image";
import {SpecsButton} from "../../components/specification-button";
import { StatsBar } from "../../components/stats-bar";
import {Link} from "react-router-dom";

type Props = {
    image: string,
    id: number;
}

function Character({image, id}:Props) {
    return (
    // <Link>
    <>
        <CharacterImage image={image} id={id} />
        <SpecsButton/>
        <StatsBar/>
    
    </>
    // </Link>
    
);
}

export default Character;