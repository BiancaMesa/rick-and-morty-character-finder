import CharacterCard from "./CharacterCard";
import "../scss/components/CharactersList.scss";

function CharactersList({characters}) {
  return (
    <section>
        <ul className="charactersList">
            {/* characterM es un array de objetos que contiene la información de todos los characters, para acceder a cada objeto (character) vamos a usar el método funcional map */}
            {characters.map((character) => {
                return  <CharacterCard characterData={character} key={character.id}/>
            })}
        </ul>
    </section>
  );
}

export default CharactersList;