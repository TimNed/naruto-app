import { Card } from "../../components/card";
import { NarutoData } from "../../service";
import { useEffect, useState } from "react";

type Props = {
    images: string,
    name: string;
}

function Home() {
  const [actors, setCharacters] = useState<Props[]>([]);

  useEffect(() => {
    retrieveNaruto();
  }, []);

  const retrieveNaruto = async () => {
    await NarutoData().then((response) => {
      setCharacters(response.data.characters);
    });
  };

  return actors.map((item, index) => {
    console.log(item?.images[0]?.substring(0, item?.images[0].indexOf('/revision')));
    return <Card key={index} image={item?.images[0]?.substring(0, item?.images[0].indexOf('/revision'))} 
    characterName={item?.name} />;
  });
}

export default Home;
