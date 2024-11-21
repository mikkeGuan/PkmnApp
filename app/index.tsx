import { Text, View, Image, TextInput, Button, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";
import { BASE_URL } from "@/utils/utils"; 
import styles from "@/styles";
import typeColors from "./components/typecolors";

export default function Index() {
  const [pokemonName, setPokemonName] = useState(""); 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); 
  const { fetchRandom } = useGlobalSearchParams(); 

  // Fetch information based on name or ID
  const fetchInfo = async (nameOrId?: string) => {
    const query = nameOrId || pokemonName.toLowerCase();
    if (!query) return;

    setLoading(true); // Set loading state to true before fetching

    try {
      const response = await fetch(`${BASE_URL}${query}`);
      if (!response.ok) throw new Error("Pokémon not found");
      const data = await response.json(); 
      setData(data); // Set the fetched data in the state
    } catch (error) {
      console.error(error);
      setData(null); // Reset data in case of an error
    } finally {
      setLoading(false); // Reset loading state after fetch
    }
  };

  // Fetch a random Pokémon by generating a random ID
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; 
    await fetchInfo(randomId.toString()); 
  };

  const getTypeColor = (type: string) => typeColors[type] || "black";

  // Automatically fetch random Pokémon if the 'fetchRandom' query param is set to "true"
  useEffect(() => {
    if (fetchRandom === "true") {
      fetchRandomPokemon(); 
    }
  }, [fetchRandom]); // Only run when 'fetchRandom' query parameter changes

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokemon Center</Text>

      <TextInput
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
        style={styles.input}
        onSubmitEditing={() => fetchInfo()} 
      />
      <Button title="Search" onPress={() => fetchInfo()} />

      {/* Display loading spinner if data is being fetched */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {data && !loading ? (
        <>
          <Text style={styles.pokemonName}>{data.name.toUpperCase()} #{data.id} </Text>
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
          <View>
            <Image
              source={{ uri: data.sprites.front_default }}
              style={styles.pokemonImage}
            />
          </View>
        </>
      ) : (
        !loading && <Text>Invalid Pokémon Name</Text>
      )}
    </View>
  );
}
