import { Text, View, Image, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";
import { BASE_URL } from "@/utils/utils"; 
import styles from "@/styles"; 
import typeColors from "./components/typecolors";

export default function Index() {
  const [pokemonName, setPokemonName] = useState(""); 
  const [data, setData] = useState(null);
  const { fetchRandom } = useGlobalSearchParams(); // Using useGlobalSearchParams to access query params

  // Fetch information based on name or ID
  const fetchInfo = async (nameOrId?: string) => {
    const query = nameOrId || pokemonName.toLowerCase();
    if (!query) return;

    try {
      const response = await fetch(`${BASE_URL}${query}`);
      if (!response.ok) throw new Error("Pokémon not found");
      const data = await response.json(); 
      setData(data); // Set the fetched data in the state
    } catch (error) {
      console.error(error);
      setData(null); // Reset data in case of an error
    }
  };

  // Fetch a random Pokémon by generating a random ID
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon API supports IDs from 1 to 898
    await fetchInfo(randomId.toString()); // Call fetchInfo with the random ID
  };

  // Get type color for Pokémon types (assuming typeColors is a mapping)
  const getTypeColor = (type: string) => typeColors[type] || "black";

  // Automatically fetch random Pokémon if the 'fetchRandom' query param is set to "true"
  useEffect(() => {
    if (fetchRandom === "true") {
      fetchRandomPokemon(); // Trigger random Pokémon fetch
    }
  }, [fetchRandom]); // Only run when 'fetchRandom' query parameter changes

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokemon Center</Text>

      {/* TextInput to search Pokémon by name */}
      <TextInput
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
        style={styles.input}
        onSubmitEditing={() => fetchInfo()} // Trigger fetch on submit
      />
      <Button title="Search" onPress={() => fetchInfo()} /> {/* Search Button */}

      {/* Display Pokémon data */}
      {data ? (
        <>
          <Text style={styles.pokemonName}>{data.name.toUpperCase()}</Text>
          {data.types.map((t, index) => (
            <Text
              key={index}
              style={{
                color: getTypeColor(t.type.name),
                fontWeight: "bold",
              }}
            >
              {t.type.name}
            </Text>
          ))}
          <Image
            source={{ uri: data.sprites.front_default }}
            style={styles.pokemonImage}
          />
        </>
      ) : (
        <Text>Invalid Pokémon Name</Text>
      )}
    </View>
  );
}
