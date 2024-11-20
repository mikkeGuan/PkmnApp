import { Text, View, Image, TextInput, Button } from "react-native";
import { useState } from "react";
import { BASE_URL } from "@/utils/utils";
import styles from "@/styles";
import typeColors from "./components/typecolors";
export default function Index() {
  const [pokemonName, setPokemonName] = useState(""); 
  const [data, setData] = useState(null);

  const fetchInfo = () => {
    if (!pokemonName) return; 

    fetch(`${BASE_URL}${pokemonName.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pokémon not found");
        return res.json();
      })
      .then((d) => setData(d))
      .catch((error) => {
        console.error(error);
        setData(null);
      });
  };
  
  const getTypeColor = (type: string) => typeColors[type] || "black"; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokemon Center</Text>
      <TextInput
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
        style={styles.input}
        onSubmitEditing={fetchInfo}
        
      />
      <Button title="Search"  onPress={fetchInfo}  />

      {data ? (
        <>
          <Text style={styles.pokemonName}>
            {data.name.toUpperCase()}
          </Text>
          {data.types.map((t, index) => (
        <Text
          key={index}
          style={{
            color: getTypeColor(t.type.name),
            fontWeight: "bold",
          }}
        >
          {t.type.name}
        </Text>))}
         
          <Image
            source={{ uri: data.sprites.front_default }}
            style={styles.pokemonImage}
          />
        </>
      ) : <Text>Invalid Pokemon Name</Text>
}
    </View>
  );
}
