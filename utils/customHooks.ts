import { useState } from "react";
export interface PokemonData {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    types: {
      type: {
        name: string;
      };
    }[];
  }
type UsePokemonState = {
  pokemonName: string;
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
  data: PokemonData | null;
  setData: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRandom: boolean;
  setTriggerRandom: React.Dispatch<React.SetStateAction<boolean>>;
  clickCount: number;
  setClickCount: React.Dispatch<React.SetStateAction<number>>;
};

export const usePokemonState = (): UsePokemonState => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [data, setData] = useState<any>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [triggerRandom, setTriggerRandom] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);

  return {
    pokemonName,
    setPokemonName,
    data,
    setData,
    loading,
    setLoading,
    triggerRandom,
    setTriggerRandom,
    clickCount,
    setClickCount,
  };
};
