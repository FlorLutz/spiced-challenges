import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    const prevButton = document.querySelector("[data-js='prevButton']");
    offset !== 0 ? (prevButton.hidden = "") : (prevButton.hidden = "hidden");
    loadPokemon();
  }, [offset]);

  function handleNextButton() {
    setOffset(offset + 20);
    console.log(offset);
  }

  function handlePreviousButton() {
    setOffset(Math.max(offset - 20, 0));
    console.log(offset);
  }

  return (
    <main>
      <button
        data-js="prevButton"
        type="button"
        className="button"
        onClick={handlePreviousButton}
        // hidden="hidden"
      >
        Previous Page
      </button>
      <button type="button" className="button" onClick={handleNextButton}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
