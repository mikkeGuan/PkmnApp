import { Text, View, Image, TextInput, Button } from "react-native";
import { useState } from "react";
import { BASE_URL } from "@/utils/utils";

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

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TextInput
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChangeText={(text) => setPokemonName(text)}
        
      />
      <Button title="Search" onPress={fetchInfo} />

      {data ? (
        <>
          <Text>
            {data.name.toUpperCase()}
          </Text>
          <Image
            source={{ uri: data.sprites.front_default }}
            style={{ width: 100, height: 100 }}
          />
        </>
      ) : <Text>Loading...</Text>
}
    </View>
  );
}
