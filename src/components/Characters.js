import React, { useState } from "react";
import characters from "../characters.json";
import Character from "./Character";

const Characters = () => {
  const [filteredCharacters, setfilteredCharacters] = useState(characters);
  const [isOnlySimpsonShown, setisOnlySimpsonShown] = useState(false);
  const showSimpsonOnly = () => {
    setfilteredCharacters(
      characters.filter((character) => {
        return character.lastName === "Simpson";
      })
    );
    setisOnlySimpsonShown(true);
  };
  const showAllCharacters = () => {
    setfilteredCharacters(characters);
    setisOnlySimpsonShown(false);
  };
  return (
    <div className="characters">
      {!isOnlySimpsonShown && (
        <button onClick={showSimpsonOnly}>
          Afficher la famille Simpson seulement
        </button>
      )}
      {isOnlySimpsonShown && (
        <button onClick={showAllCharacters}>
          Afficher tous les personnages
        </button>
      )}
      <div className="characters-grid">
        {filteredCharacters.map((character) => {
          return <Character key={character.firstName} {...character} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
